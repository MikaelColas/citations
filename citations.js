const localQuotes = [
    {
      "text": "Le génie, c'est 1 % d'inspiration et 99 % de transpiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "On peut observer beaucoup en regardant simplement.",
      "author": "Yogi Berra"
    },
    {
      "text": "Une maison divisée contre elle-même ne peut pas tenir debout.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Les difficultés augmentent à mesure que nous nous rapprochons de l'objectif.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Le destin est entre vos mains et celles de personne d'autre.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Soyez le chef, mais jamais le seigneur.",
      "author": "Lao Tseu"
    },
    {
      "text": "Rien n'arrive à moins que nous ne rêvions d'abord.",
      "author": "Carl Sandburg"
    },
    {
      "text": "Bien commencé, c'est à moitié fait.",
      "author": "Aristote"
    },
    {
      "text": "La vie est une expérience d'apprentissage, seulement si vous apprenez.",
      "author": "Yogi Berra"
    },
    {
      "text": "L'autosatisfaction est fatale au progrès.",
      "author": "Margaret Sangster"
    },
    {
      "text": "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur.",
      "author": "Bouddha"
    },
    {
      "text": "Ce que vous donnez est ce que vous recevez.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "On ne peut apprendre à aimer que par l'amour.",
      "author": "Iris Murdoch"
    },
    {
      "text": "La vie, c'est le changement. La croissance est optionnelle. Choisissez judicieusement.",
      "author": "Karen Clark"
    },
    {
      "text": "Vous le verrez quand vous le croirez.",
      "author": "Wayne Dyer"
    },
    {
      "text": "Aujourd'hui est le lendemain dont nous nous sommes inquiétés hier.",
      "author": "Auteur inconnu"
    },
    {
      "text": "La connaissance parle, mais la sagesse écoute.",
      "author": "Jimi Hendrix"
    },
    {
      "text": "La créativité, c'est l'intelligence qui s'amuse.",
      "author": "Albert Einstein"
    },
    {
      "text": "La réussite, c'est tomber sept fois et se relever huit.",
      "author": "Proverbe japonais"
    },
    {
      "text": "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
      "author": "Steve Jobs"
    },
    {
      "text": "L'avenir appartient à ceux qui croient en la beauté de leurs rêves.",
      "author": "Eleanor Roosevelt"
    },
    {
      "text": "La patience est amère, mais son fruit est doux.",
      "author": "Jean-Jacques Rousseau"
    },
    {
      "text": "La vie est ce qui arrive lorsque vous êtes occupé à faire d'autres projets.",
      "author": "John Lennon"
    },
    {
      "text": "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "text": "La simplicité est la sophistication suprême.",
      "author": "Leonardo da Vinci"
    },
    {
      "text": "Soyez vous-même, les autres sont déjà pris.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      "author": "Albert Schweitzer"
    },
    {
      "text": "La meilleure façon de prédire l'avenir, c'est de le créer.",
      "author": "Peter Drucker"
    },
    {
      "text": "Le secret du bonheur, c'est la liberté. Le secret de la liberté, c'est le courage.",
      "author": "Thucydide"
    },
    {
      "text": "L'avenir appartient à ceux qui se lèvent tôt.",
      "author": "Proverbe français"
    },
    {
      "text": "La vraie sagesse est de ne pas sembler sage.",
      "author": "William Shakespeare"
    },
    {
      "text": "La meilleure vengeance est un succès massif.",
      "author": "Frank Sinatra"
    },
    {
      "text": "La vie est trop importante pour être prise au sérieux.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès, c'est d'aimer ce que vous faites.",
      "author": "Maya Angelou"
    },
    {
      "text": "L'avenir dépend de ce que nous faisons dans le présent.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "La folie, c'est de faire la même chose et de s'attendre à un résultat différent.",
      "author": "Albert Einstein"
    },
    {
      "text": "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il découle de vos propres actions.",
      "author": "Dalai Lama"
    },
    {
      "text": "La véritable beauté réside dans la pureté du cœur.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le courage n'est pas l'absence de peur, mais la capacité à la surmonter.",
      "author": "Nelson Mandela"
    },
    {
      "text": "La seule manière de faire du bon travail, c'est d'aimer ce que vous faites.",
      "author": "Steve Jobs"
    },
    {
      "text": "Le succès, c'est de passer d'échec en échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La vie est soit une aventure audacieuse, soit rien du tout.",
      "author": "Helen Keller"
    },
    {
      "text": "Le bonheur est quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le succès, c'est de surmonter l'échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La seule façon de prédire l'avenir, c'est de le créer.",
      "author": "Peter Drucker"
    },
    {
      "text": "La simplicité est la sophistication suprême.",
      "author": "Leonardo da Vinci"
    },
    {
      "text": "Soyez vous-même, les autres sont déjà pris.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      "author": "Albert Schweitzer"
    },
    {
      "text": "La meilleure façon de prédire l'avenir, c'est de le créer.",
      "author": "Peter Drucker"
    },
    {
      "text": "Le secret du bonheur, c'est la liberté. Le secret de la liberté, c'est le courage.",
      "author": "Thucydide"
    },
    {
      "text": "L'avenir appartient à ceux qui se lèvent tôt.",
      "author": "Proverbe français"
    },
    {
      "text": "La vraie sagesse est de ne pas sembler sage.",
      "author": "William Shakespeare"
    },
    {
      "text": "Le changement est la loi de la vie. Ceux qui regardent seulement le passé ou le présent sont sûrs de manquer l'avenir.",
      "author": "John F. Kennedy"
    },
    {
      "text": "La meilleure vengeance est un succès massif.",
      "author": "Frank Sinatra"
    },
    {
      "text": "La vie est trop importante pour être prise au sérieux.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès, c'est d'aimer ce que vous faites.",
      "author": "Maya Angelou"
    },
    {
      "text": "L'avenir dépend de ce que nous faisons dans le présent.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "La folie, c'est de faire la même chose et de s'attendre à un résultat différent.",
      "author": "Albert Einstein"
    },
    {
      "text": "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il découle de vos propres actions.",
      "author": "Dalai Lama"
    },
    {
      "text": "La véritable beauté réside dans la pureté du cœur.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le courage n'est pas l'absence de peur, mais la capacité à la surmonter.",
      "author": "Nelson Mandela"
    },
    {
      "text": "La seule manière de faire du bon travail, c'est d'aimer ce que vous faites.",
      "author": "Steve Jobs"
    },
    {
      "text": "Le succès, c'est de passer d'échec en échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La vie est soit une aventure audacieuse, soit rien du tout.",
      "author": "Helen Keller"
    },
    {
      "text": "Le bonheur est quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le succès, c'est de surmonter l'échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La seule façon de prédire l'avenir, c'est de le créer.",
      "author": "Peter Drucker"
    },
    {
      "text": "La simplicité est la sophistication suprême.",
      "author": "Leonardo da Vinci"
    },
    {
      "text": "Soyez vous-même, les autres sont déjà pris.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.",
      "author": "Albert Schweitzer"
    },
    {
      "text": "La meilleure façon de prédire l'avenir, c'est de le créer.",
      "author": "Peter Drucker"
    },
    {
      "text": "Le secret du bonheur, c'est la liberté. Le secret de la liberté, c'est le courage.",
      "author": "Thucydide"
    },
    {
      "text": "L'avenir appartient à ceux qui se lèvent tôt.",
      "author": "Proverbe français"
    },
    {
      "text": "La vraie sagesse est de ne pas sembler sage.",
      "author": "William Shakespeare"
    },
    {
      "text": "Le changement est la loi de la vie. Ceux qui regardent seulement le passé ou le présent sont sûrs de manquer l'avenir.",
      "author": "John F. Kennedy"
    },
    {
      "text": "La meilleure vengeance est un succès massif.",
      "author": "Frank Sinatra"
    },
    {
      "text": "La vie est trop importante pour être prise au sérieux.",
      "author": "Oscar Wilde"
    },
    {
      "text": "Le succès, c'est d'aimer ce que vous faites.",
      "author": "Maya Angelou"
    },
    {
      "text": "L'avenir dépend de ce que nous faisons dans le présent.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "La folie, c'est de faire la même chose et de s'attendre à un résultat différent.",
      "author": "Albert Einstein"
    },
    {
      "text": "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il découle de vos propres actions.",
      "author": "Dalai Lama"
    },
    {
      "text": "La véritable beauté réside dans la pureté du cœur.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le courage n'est pas l'absence de peur, mais la capacité à la surmonter.",
      "author": "Nelson Mandela"
    },
    {
      "text": "La seule manière de faire du bon travail, c'est d'aimer ce que vous faites.",
      "author": "Steve Jobs"
    },
    {
      "text": "Le succès, c'est de passer d'échec en échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    },
    {
      "text": "La vie est soit une aventure audacieuse, soit rien du tout.",
      "author": "Helen Keller"
    },
    {
      "text": "Le bonheur est quand ce que vous pensez, ce que vous dites et ce que vous faites sont en harmonie.",
      "author": "Mahatma Gandhi"
    },
    {
      "text": "Le succès, c'est de surmonter l'échec sans perdre son enthousiasme.",
      "author": "Winston Churchill"
    }
  ]
  