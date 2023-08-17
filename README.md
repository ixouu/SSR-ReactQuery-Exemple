[Doc officielle](https://tanstack.com/query/v4/docs/react/guides/ssr#using-the-app-directory-in-nextjs-13)
## Hydrate Approche
Préfetcher la query sur le server, déhydrate le cache et réhydrate le client avec `<Hydrate>`
+ Plus de setup front à faire
+ Pas besoin de prop drill
+ Le refetch de la query est basé sur l'instant où la query à été préfetchée sur le server.
## Provider
`<QueryClientProvider>` est requis. Il doit récupérer un `<QueryClient>` depuis leur contexte. Il faut wrapper le component tree avec le `<QueryClientProvider>` et lui passer l'instance de `QueryClient`.

## Création du singleton => //lib/getQueryClient
Création d'un singleton qui est scopé à la request d'instance `QueryClient`. Cela permet de s'assurrer que la data n'est pas partagée entre différents users et requests, tout en créant un seul QueryClien par request.

`const getQueryClient = cache(() => new QueryClient())`

Fetcher la data dans un Server component plus haut dans le component tree que les components Client qui utilisent les queries pré-fetchés. Ces queries seront disponibles de tous les composants plus profonds dans le tree.

## Fetching
+ Récupérer l'instance singleton `QueryClient` 
+ Préfetcher la data en utilisant la méthode prefetchQuery et attendre que ce soit complete
+ Utiliser `dehydrate` pour obtenir la déhydratation du state des queries préfetchées depuis le query cache
+ Wrapper le composant tree qui utilise les queries préfetchées à l'intérieur de `<Hydrate>` et le fournir avec le state déhydraté.
+ On peut fetcher dans plusieurs Server Components et utiliser `<Hydrate>` dans différents endroits.
  
   
