# Git Commit Conventions

## Format des Messages de Commit

Chaque message de commit doit suivre le format suivant :

```
<emoji> <type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types de Commit avec Émojis

- ✨ `feat`: Nouvelle fonctionnalité
- 🐛 `fix`: Correction de bug
- 📝 `docs`: Modifications de la documentation
- 💄 `style`: Changements de style (formatage, espaces, etc.)
- ♻️ `refactor`: Refactorisation du code
- ⚡️ `perf`: Améliorations de performance
- ✅ `test`: Ajout ou modification de tests
- 🔧 `chore`: Tâches de maintenance
- 👷 `ci`: Modifications de la configuration CI
- 📦 `build`: Modifications du système de build
- 🎨 `ui`: Modifications de l'interface utilisateur
- 🔒 `security`: Modifications liées à la sécurité
- 🚀 `deploy`: Déploiement

### Exemples

#### ✅ Bonnes pratiques :

```bash
# Nouvelle fonctionnalité
✨ feat(auth): add login with Google

# Correction de bug
🐛 fix(header): resolve mobile menu closing issue

# Refactorisation
♻️ refactor(components): split Header into smaller components

# Documentation
📝 docs(readme): update installation instructions

# Style
💄 style(button): improve hover animation

# Interface utilisateur
🎨 ui(dashboard): redesign analytics charts

# Sécurité
🔒 security(api): implement rate limiting
```

#### ❌ À éviter :

```bash
# Messages trop vagues
update stuff
fixed bug
changed something

# Messages en français
ajout de la connexion
correction du menu

# Émojis mal utilisés ou manquants
feat: add login
🐛 added new feature
```

### Règles pour la Description

1. **Emoji** : Toujours commencer par l'emoji approprié
2. **Tense** : Utiliser l'impératif présent ("add" pas "added")
3. **Longueur** : Maximum 72 caractères
4. **Ponctuation** : Pas de point à la fin
5. **Capitalisation** : Première lettre en majuscule

### Corps du Message (Optionnel)

- Utiliser pour expliquer le "quoi" et le "pourquoi"
- Séparer du titre par une ligne vide
- Limiter à 72 caractères par ligne

### Pied de Page (Optionnel)

- Utiliser pour les breaking changes
- Référencer les issues/tickets
- Format : `BREAKING CHANGE: <description>`

### Exemple Complet

```bash
✨ feat(auth): implement OAuth2 authentication

Add Google and GitHub authentication methods to the login system.
This change improves security and user experience by providing
multiple login options.

BREAKING CHANGE: The login API endpoint has been updated to
support OAuth2 tokens.

Closes #123
```

### Extensions Recommandées VS Code

1. **Gitmoji** : Ajoute un sélecteur d'émojis pour les commits
   - ID: seatonjiang.gitmoji-vscode
2. **Conventional Commits** : Aide à formater les messages de commit
   - ID: vivaxy.vscode-conventional-commits
