![Nördnytt](https://github.com/goa-codebet/nordnytt/blob/main/public/logo.webp?raw=true)


# Nördnytt! 🤓

Fetches top stories from HackerNews and displays it.

## Start up
Use node version 20.

```bash
# Clone repo
git clone git@github.com:[your-username]/nordnytt.git
# Go into the folder
cd nordnytt
# Create new feature-branch
git checkout -b my-new-feature
# Install dependencies
npm install
# Launch dev server
npm run dev
```

## How to
1. Fork this repository to your account.
2. Choose one of the tickets in the backlog below, let us know which one you choose.
3. Create a feature branch in your fork.
4. Implement the ticket you decided to work on. Don't spend more than 2 hours developing.
5. Create a Pull Request once you're done and share it with us.

## API documentation
API documentation is provided by HackerNews via GitHub: [HackerNews API Documentation](https://github.com/HackerNews/API).

## Backlog
### 1. Implement Keyboard Navigation for the Website
I want to navigate the website using my keyboard to enhance accessibility and improve the user experience.

#### Start Page Navigation:
When the user is on the start page, pressing a number key (1, 2, 3, etc.) on the keyboard should navigate to the article in the corresponding position.
Example: Pressing '1' should open the first article, pressing '2' should open the second article, and so on.
Ensure that the numbers correspond to the visible articles on the start page, and handle any edge cases where there are fewer articles than the number pressed.

#### Article Page Navigation:
When the user is on an article page, pressing the 'n' key should navigate to the next article.
Pressing the 'p' key should navigate to the previous article.
Ensure that navigation works seamlessly and handle cases where there is no next or previous article by either doing nothing or providing appropriate feedback to the user.


### 2. Implement Pagination or Infinite Scroll for Item List
I want to be able to browse all items in the list, not just the first 10, so that I can access the complete content without restrictions.

#### Pagination Implementation:
Add pagination controls to the item list to allow users to navigate through multiple pages.
Each page should display a fixed number of items (e.g., 10 items per page).
Include "Next" and "Previous" buttons to navigate between pages.
Display the current page number and total number of pages.
Ensure that the pagination controls are accessible and user-friendly.

#### Infinite Scroll Implementation:
Alternatively, implement infinite scroll to automatically load more items as the user scrolls down the page.
Ensure that new items are seamlessly appended to the existing list without requiring a page refresh.
Provide a loading indicator to inform users that more items are being fetched.
Handle edge cases where there are no more items to load by displaying an appropriate message or stopping the infinite scroll.