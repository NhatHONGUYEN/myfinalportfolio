# Git Commit Conventions

## Format des Messages de Commit

Chaque message de commit doit suivre le format suivant :

```
<emoji> <component> > <description in english>

[optional body]

[optional footer]
```

**Important : All commit messages MUST be written in English**

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
✨ Auth > Add login with Google

# Correction de bug
🐛 Header > Fix mobile menu closing issue

# Refactorisation
♻️ Components > Split Header into smaller components

# Documentation
📝 Readme > Update installation instructions

# Style
💄 Button > Improve hover animation

# Interface utilisateur
🎨 Dashboard > Redesign analytics charts

# Sécurité
🔒 API > Implement rate limiting
```

#### ❌ À éviter :

```bash
# Messages trop vagues
✨ Auth > update stuff
🐛 Header > fixed bug
♻️ Components > changed something

# Messages en français (INTERDIT)
✨ Auth > ajout de la connexion
🐛 Menu > correction du bug

# Mauvais format
feat: Auth > add login
🐛 added new feature in header
```

### Règles pour la Description

1. **Langue** : TOUJOURS en anglais
2. **Emoji** : Toujours commencer par l'emoji approprié
3. **Component** : Spécifier le composant/module concerné
4. **Séparateur** : Utiliser ">" entre le composant et la description
5. **Tense** : Utiliser l'impératif présent en anglais ("add" pas "added")
6. **Longueur** : Maximum 72 caractères
7. **Ponctuation** : Pas de point à la fin
8. **Capitalisation** : Première lettre en majuscule

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
