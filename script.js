function generate(){
    const quotes = {
        "- CentroDev" : `"Transformez vos visions en realite digitale"`,
    
        "- M. Aurele" : `"En te levant le matin, rappelle-toi combien precieux est le privilege de vivre, de respirer, d'etre heureux"`,
    
        "- G. Clemenceau" : `"Il faut d'abord savoir ce que l'on veut, il faut ensuite avoir le courage de le dire, il faut ensuite l'energie de le faire."`,
    
        "- Agnes Ledig" : `"Le temps n'aide pas a oublier mais a s'habituer."`,
    
        "- A. Camus" : `"La vie est la somme de tous vos choix. Alors, que faites-vous aujourd'hui ?"`,
    
        "- B. Cyrulnik" : `"Le malheur vient tout seul, le bonheur, il faut aller le chercher."`,
    
        "- A. Camus" : `"La paix est la seule bataille qui vaille la peine d'etre menee."`,
    
        "- Chateaubriand" : `"Le vrai bonheur coute peu; s'il est cher, il n'est pas d'une bonne espece."`,
    
        "- A. Pope" : `"L'erreur est humaine."`,
    
        "- P. Etchebest" : `"Soyez toujours convaincus de ce que vous faites! "`
    }

    const authors = Object.keys(quotes)
    const author = authors[Math.floor(Math.random() * authors.length)]

    const quote = quotes[author]

    

   document.querySelector('#quote').innerText = quote
    document.querySelector('#author').innerText = author
    
}