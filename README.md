# Atelier Amelie Workspace

## Config

### Absolute import

When an app is created under the apps folder, create an alias in the `tsconfig.base.json` to allow absolute import, example :

```json
"paths": {
  "@admin/*": ["apps/admin/src/*"]
}
```

## Resources

- [SupaCharge Your Supabase With Nx](https://www.youtube.com/watch?v=OTh5GBBfr4E)