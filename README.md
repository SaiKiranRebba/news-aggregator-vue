# news-aggragator-1

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Run your unit tests
```
pnpm run test:unit
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##  Design Decisions

- **Vue 2** was chosen for this assignment .
- Components were broken down by concern (Card, Pagination, Pages).
- Global SCSS handles layout and theme, with dark mode via `body.dark-mode`.
- Routing is handled by `vue-router`; 

##  Trade-offs / Assumptions

- Assumes modern Chromium browsers for memory monitoring (performance.memory).
- If image not present showing the alt text.
- Used pagination logic.

## Screenshots

### Desktop

![desktop view](./src/assets/screenshots/desktop-light.png)
![desktop view](./src/assets/screenshots/desktop-dark.png)

### Mobile
![mobile view](./src/assets/screenshots/mobile-light.png)
![mobile view](./src/assets/screenshots/mobile-dark.png)

## 🚀 Performance Optimizations

- **Lazy loading images**: Reduces initial network cost using `loading="lazy"`.
- **Dark mode with CSS vars**: Avoids full DOM reflow, only color values change.
- **Debounced search input**: Limits API calls for every keystroke.
- **Scoped styles and grid layouts**: Ensures clean DOM updates.
