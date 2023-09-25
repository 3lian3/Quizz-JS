### Quiz en JavaScript :question: :pencil2:

### Description

Ce projet est un quiz interactif réalisé en HTML, CSS, et surtout en JavaScript. Ce quiz a été développé pour se familiariser à nouveau avec HTML et CSS tout en explorant en profondeur les fonctionnalités de JavaScript. Il fait un usage intensif du Document Object Model (DOM) pour manipuler les éléments HTML, créer de nouveaux nœuds et interagir avec eux.

### :hammer_and_wrench: Technologies utilisées

- HTML5
- CSS3
- JavaScript (DOM manipulation)

### :white_check_mark: Prérequis

- Navigateur moderne (tel que Chrome, Firefox)
  
### :gear: Installation

1. Clonez ce dépôt GitHub.
2. Ouvrez le fichier `index.html` dans votre navigateur.

### :book: Utilisation

Lancez le quiz en ouvrant le fichier `index.html`. Suivez les instructions à l'écran pour répondre aux questions.

**Exemple de manipulation du DOM en JavaScript :**

```javascript
// Créer un nouveau noeud
const newElement = document.createElement("div");

// Ajouter du contenu au nouveau noeud
newElement.textContent = "Ceci est une question.";

// Sélectionner le nœud parent
const parentElement = document.getElementById("quiz-container");

// Ajouter le nouveau nœud en tant qu'enfant du nœud parent
parentElement.appendChild(newElement);
```
