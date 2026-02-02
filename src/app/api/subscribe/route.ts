import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Get environment variables
    const projectSlug = process.env.PROJECT_SLUG || 'jobsitehours';
    const ideaId = process.env.IDEA_ID || '';
    const dashboardUrl = process.env.DASHBOARD_URL || 'https://jackops.fly.dev';
    const dashboardApiKey = process.env.DASHBOARD_API_KEY || '';

    // Try to submit to dashboard API if available
    if (dashboardUrl && dashboardApiKey) {
      try {
        const response = await fetch(`${dashboardUrl}/api/signups`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dashboardApiKey}`
          },
          body: JSON.stringify({
            email,
            source: source || 'landing',
            project_slug: projectSlug,
            idea_id: ideaId
          })
        });

        if (!response.ok) {
          console.error('Dashboard API error:', await response.text());
        }
      } catch (dashboardError) {
        console.error('Failed to submit to dashboard:', dashboardError);
      }
    }

    // Log the signup (useful for debugging and as backup)
    console.log('New signup:', {
      email,
      source,
      project_slug: projectSlug,
      idea_id: ideaId,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
