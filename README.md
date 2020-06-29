# Book Reader

## Installation Instruction

### To install all the dependencies
> npm install

### To run the project
> npm start

### Description

> This is a book-reader built on `ReactJS` and for ui `Bootstrap v4.5` is used.<br>
> The App is created with `create-react-app` template which can be installed by using the following command:
  ```
  npx create-react-app app-name
  ```
* User can look at the collection of books and create a library based on `categories`.
* All the books are stored in `localStorage`.
* Books can be searched by their `title`.
* User can delete the book.
* User can enter `markdown` text to write the content of the book.

### Routes

* `/` all the books are divided based on the categories and are displayed on this route.
* `/add` A new book can be added from this route. 
* `/:book-id` To delete a book based on `id`.

### Modules Used

> `bootstrap v4.5` is used to make the ui for the app.<br>
> `react-markdown` is used to display the markdown content written and to read the markdown content in the `bookDetails` component.<br>
> `uuid` is used to assign an `id` to each book so that books can be deleted while targetting the `id`.<br>
> `react-router-dom` is used for navigating between pages in the app.