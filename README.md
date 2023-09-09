# 1 уровень (необходимый минимум)
* Реализованы Требования к функциональности, описанные в прикрепленном документе.

## React

* Пишем функциональные компоненты c хуками в приоритете над классовыми: [Header](../src/components/Header/Header.jsx)
* Есть четкое разделение на умные и глупые компоненты. Пример умного: [Search](../src/components/Search/Search.jsx), пример глупого: [LoginPage](../src/pages/LoginPage/LoginPage.jsx)
* Есть рендеринг списков: [MainPage](../src/pages/MainPage/MainPage.js)
* Реализована хотя бы одна форма: [LoginForm](../src/components/AuthComponents/Forms/LoginForm.js)
* Есть применение Контекст API: [authContext](../src/store/context/authContext.js)
* Есть применение предохранителя: [ErrorBoundaries](../src/components/ErrorBoundaries/ErrorBoundaries.js)
* Есть хотя бы один кастомный хук: [useDebounce](../src/hooks/useDebounce.js)
* Хотя бы несколько компонентов используют PropTypes:  [LoginForm](../src/components/AuthComponents/Forms/LoginForm.js) ,[RegisterForm](../src/components/AuthComponents/Forms/RegisterForm.js)
* Поиск не должен триггерить много запросов к серверу:  [useDebounce](../src/hooks/useDebounce.js)
* Есть применение lazy + Suspense: App

## Redux
* [Используем Modern Redux with Redux Toolkit](./store/store.js)
* Используем слайсы: [favoriteSlice](../src/store/slices/favoriteSlice.js),  [userSlice](../src/store/slices/userSlice.js)
* Есть хотя бы одна кастомная мидлвара: [favoriteMiddlwware](../src/store/middleware/favoriteMiddleware.js)
* Используется RTK Query: [moviesAPI](../src/store/API/moviesAPI.js)
* Используется Transforming Responses:[moviesAPI](../src/store/API/moviesAPI.js)

[123](./main/)
