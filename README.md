# angular routing

## basic usage

1. setup base `<base href="/">`
2. import router module and configure routes
3. configure router outlet


## routing guards

 * `CanActivate` to mediate navigation to a route.
 * `CanActivateChild` to mediate navigation to a child route.
 * `CanDeactivate` to mediate navigation away from the current route.
 * `Resolve` to perform route data retrieval before route activation.
 * `CanLoad` to mediate navigation to a feature module loaded asynchronously.

