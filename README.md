# star-wars-app

## Project setup

```
npm install
```

add a .env file and copy the example on env.example


### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
npm run lint --fix
```

### auto format files

```
npm run format
```

## Application architecture

Our Vue.js 3 application follows a modular and component-based architecture, 
leveraging the capabilities of the Vue framework for building robust user interfaces. 
The primary components of the architecture include:

1. Vue.js 3:
- The core framework for building reactive user interfaces.
- Utilizes the Composition API for more organized and reusable component logic.
- Vuesax library for styling components

2. Axios.js:
- Used for making HTTP requests to fetch data from external APIs or server endpoints.
- Enhances asynchronous data handling and integrates seamlessly with Vue.js.

3. Components:
- Components serve as the building blocks of our application, promoting reusability and maintainability.
- Each component encapsulates specific functionality and may include data fetching, rendering logic user interactions and error handling.

## Key Architectural Choices and Patterns

1. Vue Router:
- Implements client-side routing to enable navigation between different views or pages.
- Facilitates a single-page application (SPA) experience.
- Use lazy loading for performance

2. State Management with Pinia:
- Utilizes Pinia for state management, ensuring a centralized and reactive store for managing application state.
- Promotes a clean and predictable state management pattern.

3. Axios Interceptors:
- Employs Axios interceptors to globally handle request and response transformations.
- Centralizes error handling, authentication, or other global concerns related to HTTP requests.

4. Component Lifecycle Hooks:
- Leverages Vue.js component lifecycle hooks to manage the initialization, updating of components.
- Ensures precise control over component behavior during different phases.

5. Dynamic Component Loading:
- Implements dynamic component loading to optimize the application by loading components only when needed (assumed by vue-router).
- Enhances performance by reducing the initial payload.

6. Responsive Design:
- Adopts a responsive design approach using Vue.js directives and CSS media queries.
- Ensures a seamless user experience across various devices and screen sizes.
- Add pagination in case we have a large movies

### Overall Workflow

1. Data Fetching:
- Axios is used to make asynchronous requests for fetching data from APIs or server endpoints.
- Data is then stored in the Pinia store, providing a centralized and reactive state management solution.

2. Component Initialization:
- Components leverage the created and mounted lifecycle hooks for initializing data, making API calls, or setting up subscriptions.

3. Rendering:
- Utilizes Vue.js templating to dynamically render data fetched from the server.
- Components are structured to ensure a clean separation of concerns for improved maintainability.

## Perpective
- Make the filter search work
- Make the filter search work
