# TypeScript Prompt

## Règles de Typage

### Utilisation de `type` vs `interface`

Pour tous les types TypeScript, utilisez toujours le mot-clé `type` au lieu de `interface`.

#### ✅ Bonnes pratiques :

```typescript
type UserProps = {
  name: string;
  age: number;
  email?: string;
};

type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};
```

#### ❌ À éviter :

```typescript
interface UserProps {
  name: string;
  age: number;
  email?: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
```

### Raisons pour utiliser `type` :

1. **Cohérence** : Plus simple à maintenir une seule approche
2. **Union Types** : Plus facile à créer des unions et des intersections
3. **Mapped Types** : Meilleure support pour les mapped types
4. **Performance** : Légèrement plus performant en compilation
5. **Flexibilité** : Plus facile à étendre et à modifier

### Exemples d'utilisation :

```typescript
// Props de composants
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
};

// États
type AppState = {
  isLoading: boolean;
  error: string | null;
  data: unknown;
};

// Réponses d'API
type ApiError = {
  code: string;
  message: string;
  details?: unknown;
};
```
