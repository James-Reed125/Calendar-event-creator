# Calendar-event-creator
A program that takes pasted text from a user, runs it through AI and creates a new event on google calendar.

## Project Goal
Create a program that allows a user to copy and paste text that relates to an upcoming event and have an AI to extract its details. The user can then review these details before adding the event to their Google Calendar. 

## MVP Scope
- User opens webpage and pastes text in
- Text gets passed through AI and gives event details back in JSON format
- User approves the event
- Event is added to the user's Google Calendar

## Future Plans
- Extract from the entire page instead of the user having to highlight the text
- Let the user do multiple events at once
- Turn it into a Chrome extension

## Tech Stack
- Language: I will use JavaScript for the main code and HTML and CSS for the extension’s popup.
- Tools and packages: I will use Node.js and Express for a small backend running on my laptop. It will handle requests to Gemini and keep my API key private.
- AI: I will use Gemini to find the event’s title, date, time, and location in the highlighted text. It will return these details in JSON format so my code can use them. I will also be using AI to help teach me the languages I am currently unfamiliar with, help debug my code and to help me decide what features I am able to implement
- Google: I will be using the Google Calendar API to add events to the users API. 
- Data: I will not need to store data from a user. The data collected will be pasted over by a user and will not need to be stored.

## Documents
- [Eisenhower Matrix](https://docs.google.com/document/d/1WyKBDD2IYK6mSrNXOd1eF7Z3lSDjeivYswZVRYQLBYw/edit?usp=sharing)
- [MVP Diagram](https://drive.google.com/file/d/1UvqGDEcAhcU2IP2W3Sv_hOqn5qw6L0i4/view?usp=sharing)

