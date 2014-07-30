Refaktor
========

### Installation ###

Installation des dépendances <code>npm install</code>

Compilation des fichiers JS vendor <code>gulp vendor</code>

Default task <code>gulp</code>

Data de test (console) <code>utils.createSampleData()</code>

### Todo ###
- [ ] Supprimer l'image quand on supprime un cahier exporté
- [ ] Générer un PDF de cahier
- [ ] Import/export de thèmes et faire une doc pour les créer
- [ ] Exporter les projets et les cahiers pour pouvoir les importer dans une autre instance
- [ ] Passer toutes les tailles en em dans le thème
- [ ] Gérer le redimensionnement de la fenêtre

### Bugs ###
- [x] Animation à l'apparition des books et projets
- [x] Catégories de projet quand celle-ci n'existe pas
- [x] Catégories de cahier quand celle-ci n'existe pas
- [x] Editeur de projet quand l'id ne mène à rien
- [x] Editeur de cahiers quand l'id ne mène à rien
- [x] Editeur & prévisualiseur de cahiers quand l'id ne mène à rien
- [x] Comportement quand on supprime une catégorie avec des projets dedans --> on met tout dans la catégorie "all"
- [x] Comportement quand on supprime une catégorie avec des cahiers dedans --> on met tout dans la catégorie "all"
- [x] Comportement quand on supprime un projet qui est déjà dans un cahier --> on supprime toutes les instances qui sont dans les cahiers
- [x] Instant help qui se recharge sur chaque page
- [x] Texte "medias complémentaires" sur add project qui se décale parfois
- [x] Titre des pages quand on crée un projet ou un cahier

### Bugs mineurs ###
- [ ] Faire venir les pages du haut quand on scrolle vers le haut sur la page bookeditor