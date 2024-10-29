export async function fetchHolidays() {
  const calendarId = 'en.indian.official%23holiday%40group.v.calendar.google.com';
  const apiKey = 'AIzaSyD8dc3m-fAPzNGjOJPhaeXbJjaVQ3K_Y8Q';
  const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch holidays');
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
}
