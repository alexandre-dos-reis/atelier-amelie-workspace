# Atelier Amelie Workspace

## Config

### Typescript absolute import

When an app is created under the apps folder, create an alias in the `tsconfig.base.json` to allow absolute import, example :

```json
    "paths": {
      "@admin/*": ["apps/admin/src/*"]
    }
```
