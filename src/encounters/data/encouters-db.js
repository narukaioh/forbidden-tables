export const encounters = [
  {
    title: 'Nenhum encontro',
    resume: '',
    description:
      'O tempo passa sem nenhum encontro significativo. Descreva a natureza dos arredores — o farfalhar das folhas na floresta, o uivo do vento nas planícies, a neblina dos vales das montanhas ou a chuva suave no rosto das aventureiras. Por enquanto, elas estão sozinhas em sua jornada através das Terras Proibidas.',
    type: 'Todos',
    id: 0,
    table: ''
  },
  {
    title: 'A Névoa de sangue',
    resume:
      'Tudo acontece quase imperceptivelmente. Primeiro, todo o som desaparece, e a única coisa que se pode ouvir é o som das suas palavras. Então vocês têm a sensação de que os pelos de suas nucas arrepiam, como se o ar estivesse cheio de uma energia estranha. Finalmente, você vê a neblina vermelha, fluindo lentamente sobre o chão na direção de vocês. A Névoa de Sangue.',
    description:
      'As aventureiras entraram em um bolsão de Névoa de Sangue viva. Ela vem de todos os lugares e forma um círculo ao redor do grupo. Se a vigia perceber a tempo, cada aventureira pode fazer uma rolagem de MOVIMENTAÇÃO para fugir, subindo em uma árvore ou algo similar. Se a vigia falhar na rolagem, as aventureiras são pegas pela Névoa de Sangue. Se as aventureiras puderem fazer a rolagem de MOVIMENTAÇÃO, mas falharem, elas também estarão presas na Névoa de Sangue. De qualquer maneira, cada aventureira pode fazer uma rolagem de MOVIMENTAÇÃO a cada rodada para escapar. Uma aventureira engolfada pela Névoa de Sangue deve fazer uma rolagem de DISCERNIMENTO a cada rodada. Falhar significa que a aventureira sofre 1 ponto de dano em Empatia e sofre uma intensa saudade de casa. Se a vítima estiver Acabada, ela perde a vontade de viver e simplesmente se senta para esperar a morte. As outras aventureiras devem arrastá-la para a segurança.\nApós um tempo na Névoa de Sangue, as aventureiras são atacadas por um Sangrento (veja a página 110).',
    type: 'Todos',
    id: 1,
    table: ''
  },
  {
    title: 'Duelo na mata',
    resume:
      'Vocês ouvem o som de uma batalha e um berro violento misturado com canções e gritos de batalha. Adiante no caminho, um orc está duelando com uma elfa tatuada. Eles avançam um sobre o outro e aparam os golpes sem se atingirem. Ocasionalmente eles param para trocarem insultos.',
    description:
      'A elfa Heldemin, uma entalhadora de seiva viajante, por muito tempo tentou se aproximar do clã Roka, dos orcs, para estudar seus costumes e tentar entendê-los. Ela se tornou amiga de um orc ferreiro chamado Alachran. Quando ela descobriu a maravilhosa voz dele, teve a ideia de fazer um espetáculo teatral dramático com ele, para apresentar tanto entre os orcs como entre os elfos. Como sua amizade é bastante controversa, eles praticam o espetáculo afastados no meio da floresta.',
    type: 'Planície, Floresta, Colina',
    id: 2,
  },
  {
    title: 'O FUGITIVO ORC',
    resume:
      'Primeiro vocês escutam uma canção gutural, “Msshamassh, gukkull, gukkull” e o som de um tambor marcando o ritmo. Então vocês veem um grupo de orcs andando em uma procissão caótica, cantando um hino. Em meio ao grupo, dois orcs carregam uma enorme vara de madeira, onde um orc amarrado está pendurado e indefeso.',
    description:
      'Um grupo de orcs, duas vezes maior que o grupo das aventureiras, está a caminho de voltar para o seu clã com o fugitivo Sargah, que escapou para buscar o seu próprio destino nas Terras Proibidas. Os orcs tem as estatísticas típicas de jogo encontradas na página 64.',
    type: 'Planície, Floresta, Floresta Sombria, Colina, Charco, Ruínas',
    id: 3,
    table: ''
  },
  {
    title: 'A MORTE VEM DE CIMA',
    resume:
      'Vocês ouvem um grito arrepiante no ar e, no momento seguinte, o som de grandes asas batendo. Então vocês o enxergam. Um enorme pássaro demoníaco desce das nuvens. Ele gira no ar e mergulha, vindo em direção ao grupo.\n',
    description:
      'As aventureiras subitamente entraram no território de um grifo. Inicialmente, ele vai tentar assustar as aventureiras e testar sua força. Se as aventureiras fugirem por onde vieram, o grifo vai sobrevoá-las, mas as deixará escapar. Se elas atacarem o grifo ou continuarem o caminho através de seu território, ele lutará até morte. Leia mais sobre grifos na página 94.\n',
    type: 'Planície, Colina, Montanha, Lago, Ruína',
    id: 4,
    table: ''
  },
  {
    title: 'O BANQUETE DAS HARPIAS',
    resume:
      'Primeiro vocês ouvem os gritos: “Meeeee dêêêê!”,” Nããão, dê para miiiiiim!”, “Nããão, eu quero devoraaaar as pequeninaaaas!” Então vocês veem essas criaturas horrendas com asas de águias e corpos retorcidos, e elas descem sobre vocês. Harpias!',
    description:
      'As três harpias famintas, Krag, Mag e Serag, atacam as aventureiras para se banquetear com seus corpos. Durante o ataque, uma delas vê um objeto brilhante carregado por uma das aventureiras e começa a gritar empolgada sobre “o tesouro”. Essa é uma oportunidade para as aventureiras usarem a cobiça das harpias contra elas mesmas.\nEssa revoada de harpias possui uma força combinada de 9. Leia mais sobre harpias na página 96.',
    type: 'Planície, Colina, Montanha, Lago, Pântano, Charco, Ruína',
    id: 5,
    table: ''
  },
  {
    title: 'O CAVALO',
    resume:
      'Vocês ouvem o relinchar de um cavalo, e subitamente ele está diante de vocês. Um orgulhoso garanhão, com sela, bolsas e uma manta de sela. Seu dono não está à vista. O cavalo solitário chacoalha a cabeça, claramente frustrado.',
    description:
      'O cavalo pertence ao nobre Lavide, morto em uma emboscada dois dias atrás. Nas bolsas da sela, há um item VALIOSO assim como o símbolo em forma de rosa da casa nobre de seu dono. O cavalo tem treinamento de combate, mas não gosta de estranhos. No entanto, uma rolagem bem-sucedida de ADESTRAMENTO pode acalmar o animal. Se fracassar, as aventureiras terão que pegá-lo à força. Se elas devolverem o cavalo e o símbolo da casa para a família de Lavide em um castelo próximo, elas serão recompensadas com o próprio cavalo, assim como um item PRECIOSO.',
    type: 'Planície, Floresta, Ruína',
    id: 6,
    table: ''
  },
  {
    title: 'ISCA DO MASSACRE',
    resume:
      'Uma cena terrível se desenrola na frente de vocês. Uma dúzia de humanos se arrastam de um lugar para o outro com suas entranhas para fora, alguns ainda vivos, cobertos de sangue. Uma carroça está virada com sua carga. Algumas pessoas estão gemendo, outras estão gritando. Uma mulher vestida com uma cota de malha tenta erguer uma espada. Quando um jovem saudável vê vocês, ele grita histericamente.\n“Assaltantes! Eles levaram nossos cavalos. Vocês têm água? Algum de vocês é um curandeiro? Não, irmão, não durma!”',
    description:
      'A cena, na verdade, é completamente encenada e ninguém está realmente ferido. Um grupo de escravagistas derramou sangue e intestinos de animais neles mesmos e ao redor, com a esperança de que as aventureiras se aproximem deles sem sacar suas armas. O líder, Harwa, tem uma trombeta de bronze e quando ele a tocar, todo o grupo deve imediatamente atacar as suas “salvadoras”. O objetivo deles não é matar, mas sim dominar as aventureiras com seus porretes, e então vendê- las como escravas, possivelmente na aldeia de Moeosso (veja o livro de campanha Expurgo do Corvo). Se qualquer uma conseguir fugir, os escravagistas não a perseguirão, em vez disso eles vão apenas garantir as que eles conseguiram.\n\nESCRAVAGISTAS\n\nFORÇA 3, AGILIDADE 2, ASTUCIA 2, EMPATIA 2\nPERICIA: Luta 2\nEQUIPAMENTO: Porrete de madeira ou maça, armadura de couro, D6 cobres',
    type:
      'Planície, Floresta, RuínaPlanície, Floresta, Colina, Montanha, Charco',
    id: 7,
  },
  {
    title: 'O GRANDE INSULTADOR',
    resume:
      'Uma voz alta e agitada se espalha pela região. Alguém está gritando insultos e zombarias. Quando vocês se aproximam, veem uma estrutura instável de madeira que se ergue alguns metros do chão. No topo dela há um orc com uma expressão presunçosa. Quando ele as vê, ele desabotoa suas calças e urina em sua direção, gritando insultos ao mesmo tempo.',
    description:
      'O orc Khardnal se intitula o “Grande Provocador” e quer acordar as pessoas de sua apatia. Khardnal vê como uma missão pessoal espalhar a sua palavra e provocar transeuntes para que soltem sua fúria interna, e ele acredita que foi ele quem fez a Névoa de Sangue se dissipar de medo. Se as aventureiras atacarem Khardnal, ele usará um arco ou um machado e um escudo. Ele ama entrar em sua fúria berserker. Ele lutará até a morte enquanto provoca seus oponentes, ao mesmo tempo que ele os elogia por estarem em sintonia com sua fúria interna.\nKhardnal é do clã Urhur e tem as estatísticas de um membro típico (veja a página 64) com a adição do talento BERSERKER.',
    type: 'Planície, Floresta, Charco, Ruína\n',
    id: 8,
  },
  {
    title: 'RUÍNAS ANTIGAS',
    resume:
      'Diante de vocês estão os restos degradados do que já foi uma construção no passado, um posto civilizado nas terras selvagens. Agora a natureza reivindicou o local, e tudo que sobrou são os restos ruídos e as memórias perdidas nas névoas da história.',
    description:
      'As aventureiras encontram uma ruína que é um local seguro para montar acampamento. Para decidir o tipo de ruína e quem vivia nela, você deve rolar um D66 na tabela abaixo.',
    type:
      ' Planície, Floresta, Floresta Sombria, Colina, Montanha, Pântano, Charco, Ruína',
    table:
      'D66\n11-16 - Cabana - Um casal de idosos\n21-24 - Moinho - Um moleiro enterrado no quintal\n25-32 - Posto de Guarda - Vigia, morto em serviço\n33-35 - Templo - Irmãs do Corvo assassinadas\n36-46 - Fazenda - Um rico mercador, morto há muito tempo\n51-54 - Torre - Um feiticeiro perdido\n55-62 - Posto  de Vigia - Já foi habitado por soldados Amienses\n64-66 - Estalagem - Viajantes de antes de Névoa de Sangue',
    id: 9,
  },
  {
    title: 'A RAPOSA',
    resume:
      'Uma estranha música ecoa pela região. Uma voz masculina e grave canta sobre flores púrpuras e tumbas profundas onde a terra e o céu se encontram. Vocês nunca ouviram uma música como essa. Quando vocês passam por uma curva da estrada, subitamente se encontram face a face com uma pequena raposa. Ela as encara com grandes olhos. A música terminou.',
    description:
      'A raposa na verdade é um demônio chamado Grelf, e é a criatura que estava cantando a música. No entanto, Grelf se orgulha em assumir a identidade de uma raposa, e prefere não cantar nem falar quando estiver perto das aventureiras. Se ele decidir falar, ele tem a voz de um guerreiro grisalho e experiente. Sendo um demônio curioso, Grelf se manterá perto das aventureiras e dormirá por perto quando elas acamparem (às vezes ele fala sobre outros mundos enquanto dorme, às vezes ele apenas ronca alto). Grelf pode se transformar em um demônio a qualquer momento — use as tabelas para criar um demônio na página 79.',
    type: 'Planície, Floresta, Floresta Sombria, Charco',
    table: '',
    id: 10,
  },
  {
    title: 'O PRÍNCIPE ESQUECIDO',
    resume:
      'Uma grande pilha de rochas pesadas, empilhadas uma sobre a outra em um monumento que vocês reconhecem. Alguém obviamente passou um longo tempo construindo a lápide, e alguém ou algo está enterrado abaixo dela.',
    description:
      'Um príncipe Amiense caiu em batalha aqui há centenas de anos. O príncipe, cujo nome foi esquecido há muito tempo, foi enterrado ao lado de seu cavalo e de dois cavaleiros leais, todos os quais pereceram na mesma batalha. O túmulo contém um colar de prata (que vale 2D6 moedas de prata), uma velha espada larga e uma cota de malha enferrujada. Se as aventureiras decidirem procurar por tesouros, o príncipe vai acordar de seu sono e atacá-las como um Cavaleiro da Morte!\nVocê pode ler mais sobre Cavaleiros da Morte na página 76.',
    type:
      'Planície, Floresta, Floresta Sombria, Colina, Montanha, Pântano, Charco, Ruína',
    table: '',
    id: 11,
  },
  {
    title: 'OS ASSALTANTES FAMINTOS',
    resume:
      'Um grupo de humanos maltrapilhos, vestindo roupas desgastadas e todo tipo de armas simples, aparece na estrada. Eles estão sujos, e parece que não comem nada há alguns dias. Um homem grande com uma barba negra se adianta, cospe no chão e coloca as mãos no cabo da espada. “Que raios de porqueira cêis são? Que cêis tão fazendo aqui? Cêis não sabem quem sou eu?”',
    description:
      'Um grupo de assaltantes famintos, em número igual ao das aventureiras e liderados por Argam Duasbarbas, está com dificuldades e procurando por um saque que os deixe feliz de novo. Os assaltantes estão cansados, e podem ser convencidos a dividir o acampamento se as aventureiras oferecerem comida e histórias.\n\nBANDIDOS\n\nFORÇA 3, AGILIDADE 3, ASTÚCIA 3, EMPATIA 2\nPERÍCIAS: Luta 3, Furtividade 2, Patrulha 1, Sobrevivência 2\nEQUIPAMENTO: Espada larga, machadinha ou porrete de madeira, D6 cobres',
    type:
      'Planície, Floresta, Floresta Sombria, Colina, Montanha, Pântano, Charco, Ruína',
    table: '',
    id: 12,
  },
  {
    title: 'O IRMÃO DA PRAGA',
    resume:
      'Você encontra os restos apodrecidos de um viajante desafortunado na sua frente. Os corvos e os animais selvagens já fizeram sua parte, e o corpo está despedaçado.',
    description:
      'O homem morto é um Irmão Enferrujado que caiu em desgraça entre os seus e foi objeto de um experimento cruel de seu mestre. Seu nome era Largas e ele foi intencionalmente infectado com uma praga demoníaca. Largas conseguiu escapar de seus perseguidores, mas a infecção se espalhou por seu corpo. A doença evoluiu e ele morreu nesse local, sofrendo de dores intensas.\nQualquer aventureira que toque o corpo será infectada, mas a doença agora está muito mais fraca, com um nível de Virulência 3. Com o decorrer da infecção, a vítima experienciará fortes alucinações, vendo demônios distorcidos no lugar das pessoas. O corpo também tem um medalhão de bronze simples com o símbolo da Irmandade Enferrujada.',
    type:
      'Planície, Floresta, Floresta Sombria, Colina, Montanha, Pântano, Charco, Ruína',
    table: '',
    id: 13,
  },
  {
    title: 'PENITENTES',
    resume:
      'É difícil dizer se é o som dos chicotes e gritos ou a batida dos tambores e os cânticos sagrados que vocês ouvem primeiro. Uma grande procissão se aproxima. Vestidos de preto e envoltos em espinhos de amoreira, eles se chicoteiam e flagelam. Muitos deles cortaram suas línguas ou orelhas, alguns arrancaram seus olhos. Na linha de frente vem um grupo de mulheres vestidas de vermelho, elas carregam uma grande bandeja com incenso aceso. Uma delas segura uma vara com um estranho símbolo de ferro. No meio da multidão, há uma construção de madeira sobre rodas. Pessoas pendem de cordas, presas por ganchos em sua pele. Escravos acorrentados empurram a estrutura sobre a lama.',
    description:
      'A líder dos cultistas é a Mãe Catyala, líder de uma facção independente da Igreja Enferrujada. Ela prega que a Névoa de Sangue se espalha pelas Terras Proibidas para marcar sua queda. Quando a névoa se dissipou, foi o sinal de que o fim estava próximo. Portais para os reinos demoníacos estão abertos. Bandidos e foras da lei matam e pilham. A terra está se despedaçando. A única maneira das Terras Proibidas poderem ser salvas é se seu povo se punir o bastante para fazer os deuses os perdoarem. Mãe Catyala tentará persuadir as aventureiras a deixar suas roupas e equipamentos e se juntar à multidão. Para ajudá-la, ela possui o símbolo de ferro, que contém a magia ILUSÃO. Uma aventureira que olhar para o símbolo tem que fazer uma rolagem de DISCERNIMENTO. Falhar significa que a aventureira verá o mundo pelos olhos da Mãe Catyala. O efeito irá durar até que o símbolo seja destruído ou fique fora de vista.',
    type: 'Planície, Colina, Charco',
    table: '',
    id: 14,
  },
  {
    title: 'PEDINTES',
    resume:
      'Vocês os veem de longe, uma multidão de viajantes famintos e esfarrapados. Os pedintes as cercam com mãos estendidas, sem dizer nada.',
    description:
      'Esses vinte pedintes são o que restou da aldeia de Bosque Frey, que foi queimada por aventureiros gananciosos.',
    type: 'Planície',
    table: '',
    id: 15,
  },
  {
    title: 'O ANÃO PILOTO DE BALÃO',
    resume:
      'À distância, vocês veem um casulo verde em uma árvore. Quando vocês se aproximam, vocês percebem que se trata de um balão de ar quente preso no alto da árvore.',
    description:
      'O anão Andred rejeitou o deus Vasto depois que um desabamento de túnel matou sua família. Andred estava do outro lado do desabamento. Ele ouviu seus gritos enquanto eles sufocavam um após o outro. Desde então, ele se recusa a pisar no chão, e viaja pelas Terras Proibidas em seu balão de ar quente. Para sobreviver, ele lança âncora à noite nos telhados de casas e rouba coisas que podem ser usadas para trocar por comida e outras necessidades mais tarde. O balão agora caiu em uma árvore. Andred quebrou sua perna. Ele precisa de ajuda para reparar o balão, mas tem medo de que as aventureiras o roubem. Andred tem três bestas carregadas e um machado de batalha. No balão há objetos roubados: um item simples e um valioso (role na tabela “em um covil” da página 188).\n\nANDRED\n\nFORÇA 2, AGILIDADE 2, ASTÚCIA 4, EMPATIA 4\nPERÍCIAS: Luta 2, Manipulação 3, Movimentação 2, Pontaria 4, Discernimento 4, Furtividade 4, Artimanha 5',
    type: 'Planície, Floresta, Pântano, Charco',
    table: '',
    id: 16,
  },
  {
    title: 'CASAMENTO',
    resume:
      'À distância vocês escutam música e pessoas dançando; vozes humanas e as vozes graves de orcs. Eles cantam canções alegres. Conforme se aproximam vocês veem um palco de madeira decorado com flores no centro de uma clareira. Mesas com comida e bebida. Músicos com violinos e acordeões. E na borda da clareira está um casal, um homem humano e uma mulher orc vestidos de branco.',
    description:
      'A orc Tregga e seu futuro marido Robert decidiram deixar suas vidas de guerreiros para trás e se unir em matrimônio. Eles reuniram seus amigos próximos e seus familiares. Se as aventureiras se aproximarem do casamento e conversarem com alguém, eles serão apresentados ao noivo e a noiva, que as convidarão a ficar.\nAlguns dos convidados do casamento, tanto humanos como orcs, decidiram sabotar a cerimônia: eles acham a ideia da mistura entre as ascendências nojenta. Eles concordaram em começar uma briga entre eles durante a cerimônia com a esperança de que outros convidados se juntarão a eles. As aventureiras podem se juntar à briga ou detê-la.',
    type: 'Floresta',
    table: '',
    id: 17,
  },
  {
    title: 'O PADEIRO DEMONÍACO',
    resume:
      'Quando os ventos sopram nas suas direções, vocês sentem o cheiro de pão recém-saído do forno. Conforme vocês se aproximam veem uma pequena casa de pedra aninhadaemmeioàvegetação.Nãohátrilhas,pastos ou campos ao redor. Uma grande nuvem de fumaça se ergue continuamente da chaminé e a luz brilha através das pequenas janelas quadradas.',
    description:
      'A casa é o lar de Melkar, um robusto Halfling com uma barba avermelhada. Depois que ele foi expulso de sua aldeia de Pertny, ele encontrou pedras demoníacas que usou para construir um forno. Melkar está vestido com roupas brancas e um chapéu de padeiro. Ao seu redor estão pratos e tigelas cheias de massa. Dois dos pratos tem massas com o formato de criaturas com braços, pernas e uvas-passas no lugar dos olhos. Aqueles que observarem de perto perceberão que os pedaços de massa estão vivos.\nMelkar usa seu forno para assar criaturas de massa. Seus planos são usá-las como servas guerreiras. Uma fornada já está pronta. Baús, potes e armários escondem vinte criaturas de massa armadas com pequenas lanças e facas.\nMelkar convidará as aventureiras para tomar chá com bolinhos, que não estão vivos. Se as aventureiras descobrirem uma criatura de massa, Melkar diz a elas que ele tem a habilidade de criar vida, e que ele quer viver em paz com suas criações. Se as aventureiras os atacarem, ele chamará todas as criaturas de massa. Em um baú de madeira há uma joia de diamante (valendo 1 ouro) que Melkar roubou do chefe da aldeia de Pernty. Se as aventureiras tentarem assar massa por conta própria, o demônio vivendo nas pedras tentará corrompê-las.\n\n✥ MASSAS DEMONÍACAS: As massas demoníacas de Melkar são tratadas como uma única criatura. Ela tem apenas o atributo Força, que é igual ao número de massas divididas por 5 (arredondadas para cima). As massas não possuem perícias. Seus ataques têm Dano de Arma 1 (perfurante).\n✥ SEGUNDO ENCONTRO: A próxima vez que as aventureiras visitarem Melkar, ele estará cercado por 70 massas demoníacas que estarão ocupadas em produzir armas e assar mais criaturas de massa. Elas servem Melkar, que se senta confortavelmente em sua poltrona, petiscando com pães e bolos mal comportados, que gritam em agonia enquanto o padeiro demoníaco os devora. O Halfling mostra agora sua verdadeira personalidade, agindo de forma arrogante e ameaçadora.\n✥ TERCEIRO ENCONTRO: Na terceira vez que as aventureiras visitarem o local, a casa estará vazia. Melkar levou duzentas massas demoníacas para a aldeia de Pernty. Os aldeões de Pernty expulsaram Melkar por ter roubado uma joia. Melkar terá sua vingança ao deixar suas tropas queimarem a aldeia e tomarem os habitantes como escravos. Se as aventureiras continuarem na casa, ele retornará depois de algumas horas com muitos halflings acorrentados.',
    type: 'Floresta, Floresta Sombria, Pântano, Charco',
    table: '',
    id: 18,
  },
  {
    title: 'O SANTUÁRIO ANIMAL',
    resume:
      'Quando a escuridão se espalha e a chama de vocês queima, vocês veem os primeiros pares de olhos nas árvores. No início há apenas alguns, porém mais e mais olhos aparecem, mais do que vocês podem contar. Vocês estão cercadas. Corujas e outros seres da floresta se movem em meio às árvores, e ratos correm em meio aos seus pertences. Vermes se arrastam aos seus pés e pássaros pousam sobre suas armas. Um cervo está a poucos metros de vocês, perto de uma raposa. Os animais se aproximam lentamente.',
    description:
      'As aventureiras acidentalmente fizeram seu acampamento em um santuário sagrado de animais. Os animais estão lá para expulsá-las pacificamente. Mais animais chegarão ao santuário, grandes javalis selvagens, lobos e alces. Eles usarão seus focinho e chifres para empurrar gentilmente as aventureiras e seus equipamentos para fora do local. Se as aventureiras atacarem, os animais se afastarão, mas não irão embora. Eventualmente a Alce Negra chegará, a líder sagrada dos animais da floresta. Ela espalhará a fogueira com seus chifres e dará um bufado sonoro. Se ela for atacada, todos os animais da floresta a ajudarão e não cessarão seu ataque até que as aventureiras tenham deixado a floresta.\nPara as estatísticas dos animais, veja a página 126.',
    type: 'Floresta Sombria',
    table: '',
    id: 19,
  },
  {
    title: 'APROCISSÃO FÚNEBRE',
    resume:
      'Algo muito grande se aproxima, fazendo um barulho que vocês nunca ouviram antes. Toques longos e pesarosos de trombetas sacodem o ar. O ranger e o estalar criam um ritmo ao redor dos uivos que cortam o ar e as lamúrias cascateantes. Depois de um tempo, cinco árvores aparecem andando carregando uma sexta árvore entre elas. Elas dão um passo, soltam seus sons, dão mais alguns passos, param novamente e soltam seus lamentos mais uma vez em uma lenta procissão.\n',
    description:
      'Os Ents estão carregando um parente morto em direção à Névoa Plácida em uma procissão fúnebre. O coração élfico de rubi do Ent morto ainda está em seu lugar, mas a criatura pediu para se livrarem de seu corpo de árvore e que a montassem como um rubi na muralha da memória de Rosenstaad. Se os Ents estiverem em um lugar ou região estranha, talvez eles estejam carregando o Ent morto para um local que ele sempre quis conhecer. Alguns elfos estão escoltando a procissão, mas não se revelarão a não ser que as aventureiras perturbem os Ents. Se elas o fizerem, os elfos vão gritar: “Vão embora, sacos de carne maldita!” Os elfos não são muitos, mas se houver uma luta, os Ents abaixarão sua carga e entrarão no combate. Eles não querem matar ninguém se isso puder ser evitado, mas destruirão equipamentos e quebrarão alguns membros para deixar uma mensagem. Se as aventureiras não atrapalharem a procissão, elas serão deixadas em paz. Um Ent pode até deixar o cortejo, curvar-se perante as aventureiras e dar a elas um presente: uma fruta ou noz do Ent morto, ou algo mais útil.',
    type: 'Floresta Sombria',
    table: '',
    id: 20,
  },
  {
    title: 'O ESPÍRITO VINGATIVO',
    resume:
      'Silêncio! Vocês conseguem ouvir? Um grito? Uma voz? Vocêsolhamumasparaasoutras,masoterrenoestá deserto. Então subitamente, vocês sentem um vento gélido soprar por suas almas. Uma forma cinza e cintilante surge em meio ao seu grupo, com um rosto outrora humano distorcido em um grito abominável. Vocês já ouviram histórias antes ao redor de fogueiras. Uma alma perdida, um espírito incapaz de descansar.',
    description:
      'As aventureiras encontram o fantasma do comandante Amiense chamado Garmagol, morto há muito tempo. Durante uma campanha, quatrocentos anos atrás, ele foi levado até uma armadilha por seus homens cansados da guerra e foi assassinado por suas próprias tropas. Desde então, Garmagol vaga pela terra em busca de vingança. Como todos os soldados Amienses já se foram há muito tempo, qualquer um com uma arma é um alvo em potencial. Se as aventureiras forem observadoras, elas poderão notar uma adaga cintilante enfiada entre as omoplatas do fantasma. As aventureiras podem conseguir conversar com o fantasma se elas falarem sobre a adaga e sobre a morte de Garmagol.\nO fantasma não pode ser evitado por MANTER VIGÍLIA. Leia mais sobre fantasmas na página 90.',
    type:
      'Planície, Floresta, Floresta Sombria, Colina, Montanha, Pântano, Charco, Ruína',
    table: '',
    id: 21,
  },
  {
    title: 'A VIDRACEIRA',
    resume:
      'À distância, vocês ouvem um som límpido toda vez que o vento passa pelas árvores. Parece uma flauta enorme. Uma estrutura de vidro se ergue sobre o terreno; corredores, aberturas, espirais e túneis, todos feitos de vidro. Em meio à construção está uma anã, iluminada pelas chamas de uma lareira. A anã levanta a ponta de uma longa vara de metal do fogo, e que está coberta por uma polpa de vidro brilhante. Ela coloca a outra ponta nos lábios e, com um sopro forte, a polpa se transforma em um longo tubo de vidro.',
    description:
      'A anã Varamak teve a visão da estrutura de vidro em seus sonhos. Ela acha que é possível entender, refrear e controlar a Névoa de Sangue. Por diversas semanas ela tem trabalhado no projeto de sua vida. A única coisa que falta é reunir a Névoa de Sangue em um tubo de vidro e colocar na estrutura. Ela pede ajuda para as aventureiras. O que Varamak não sabe é que sua visão foi criada por um demônio. Se ela conseguir coletar a Névoa de Sangue, ela se espalhará pela estrutura com uma velocidade progressiva, soando como um grito crescente. Depois de D6 horas, o vidro irá quebrar. A névoa irá cobrir os arredores de todo o hexágono do mapa (veja o encontro aleatório da Névoa de Sangue). Ela irá dispersar depois de D6 semanas.',
    type: 'Colina, Montanhas',
    table: '',
    id: 22,
  },
  {
    title: 'O FILHOTE',
    resume:
      'Vocês ouvem um ganido baixo, e então algo que parece um latido. Por baixo de uma moita, dá para ver uma cauda saindo. É um filhote de cachorro observando vocês com olhos grandes.',
    description:
      'O filhote está com uma pata machucada. Sua mãe e cinco outros filhotes foram mortos pela troll Ghormald, que os queria como almoço. O filhote conseguiu escapar, mas Ghormald seguiu sua trilha, chegando na cena com um filhote morto em cada mão e seu rosto coberto de sangue. Ela pede às aventureiras que deixem sua presa onde está. Ela está pronta para lutar pela presa usando uma clava que está pendurada em seu cinto.\nGhormald é uma troll típica (veja a página 114).',
    type: 'Montanha, Charco',
    table: '',
    id: 23,
  },
  {
    title: 'O OGRO AMALDIÇOADO',
    resume:
      'Trampo e encrenca, encrenca e trampo”. Uma voz grave e gutural ecoa pela região. No momento seguinte, vocês veem um ogro grande e musculoso arrastando um saco. Algo está chutando e se agitando lá dentro, fazendo com que o ogro bata no saco repetidamente. O movimento para de imediato. \"Eu mandei você calar a boca!\"',
    description:
      'Kurge, o ogro, está a caminho de seu covil com seu último prisioneiro. Dentro do saco pode ser encontrado o azarado Irmão Enferrujado Oker, que invocou a maldição do deus Ferrugem sobre Kurge. O ogro ainda não decidiu o que fazer com Oker, mas está considerando algo divertido, como praticar tiro ao alvo com pedras, ou arrancar seus membros do corpo. Depende do humor de Kurge. Kurge tem as estatísticas de jogo de um ogro típico, como encontradas na página 61.',
    type: 'Planície, Floresta, Floresta Sombria, Colina, Montanha, Ruína',
    table: '',
    id: 24,
  },
  {
    title: 'FABRICANTES DE VELAS',
    resume:
      'Do lado de fora de uma cabana, duas mulheres, uma mais velha e uma jovem, estão ao lado de um caldeirão com uma fogueira acessa debaixo dele. Ao lado, velas azuis pendem de uma prateleira. As mulheres parecem preocupadas, olhando para a floresta.',
    description:
      'As aventureiras encontraram a mulher Engsle e sua filha. Elas fazem um tipo particular de vela usada em cerimônias religiosas. O filho da família desapareceu uma hora atrás na floresta, indo pegar Brilhazul, um tipo de flor usada para fazer velas. A mãe oferece às aventureiras dez velas se elas puderem encontrar seu filho e trazê-lo de volta. As velas que elas estão fazendo não funcionarão até que tenham sido mergulhadas em um tonel de Brilhazul pulverizada. Quando estiverem prontas, elas podem ser acesas e criar o mesmo efeito da magia PURIFICAR ESPÍRITO com Nível de Poder 1 (veja a página 123 do Manual do Jogador). O filho de Engsle foi capturado pelo ogro Gonlab, que o tomou como escravo. Gonlab é um ogro típico (veja a página 61).',
    type: 'Floresta Sombria',
    table: '',
    id: 25,
  },
  {
    title: 'FOGO FLORESTAL',
    resume:
      'O cheiro de fumaça as atinge ao mesmo tempo que um cervo passa correndo ao seu lado. Sobre as árvores vocês veem a fumaça negra. O vento muda, e o fogo está vindo na direção de vocês.\n',
    description:
      'Há um incêndio na floresta. Animais estão em fuga, o topo das árvores está em chamas e uma fumaça sufocante se espalha pela floresta. O fogo se move rapidamente. As aventureiras precisam ter sucesso em uma rolagem de SOBREVIVÊNCIA para escapar. Se elas fracassarem, serão atacadas pelas chamas, role um ataque contra cada uma das aventureiras usando seis Dados Base (Dano de Arma 1). As aventureiras podem então rolar SOBREVIVÊNCIA novamente para escapar. Se elas fracassarem novamente, o ataque de fogo é feito com sete Dados Base. Esse ciclo continua, com outro Dado Base acrescentado ao ataque de fogo a cada vez, até as aventureiras escaparem ou ficarem Acabadas.\nNão se esqueça de pedir que as jogadoras descrevam suas ações, e digam como as chamas as cercam, como seus pulmões se enchem de fumaça e as árvores flamejantes caem no chão em frente a elas.',
    type: 'Floresta',
    table: '',
    id: 26,
  },
  {
    title: 'AREIA NEGRA',
    resume:
      'A floresta se abre e vocês veem uma enorme clareira cercada pelas árvores. O chão está coberto de areia negra.Vocêsnãoveemumaúnicaplanta.Épossível ver algumas rochas que poderiam ser restos de casas. Alguém está sentado no meio da clareira, uma jovem garota com seus olhos fixos no chão. O local cheira a enxofre. A areia se agita com o vento que sopra pela clareira.',
    description:
      'Duas feiticeiras rivais se encontraram na aldeia de Mataselvagem e uma delas fracassou ao lançar uma magia, o infortúnio destruiu tanto as feiticeiras quanto a aldeia. A única sobrevivente é a garota Linn. Ela não está com um humor receptivo e não responderá se for indagada, nem se moverá voluntariamente e nem lutará se for levada a força pelas aventureiras. Depois de D6 dias, se alimentada, ela contará às aventureiras o que aconteceu. Se ela continuar com elas, Linn revelará que o acidente lhe concedeu poderes mágicos que ela não consegue controlar. Linn quer aprender como lançar magias. Ela quer matar todos os feiticeiros das Terras Proibidas.',
    type: 'Floresta Sombria',
    table: '',
    id: 27,
  },
  {
    title: 'A CASA VAZIA',
    resume:
      'À distância, vocês conseguem ver fumaça se erguendo de uma chaminé. Um pequeno chalé aninhado entre árvores altas. Em um suporte de varas, roupas estão penduradas para secar. Próximo à construção há um pequeno cercado, mas nenhum animal pode ser visto. Uma pequena horta é cercada de pedras tiradas da região. Caules verdes se alinham de forma contínua. Vocês ouvem o barulho de um riacho por perto.',
    description:
      'As aventureiras chegaram em um chalé cuja família que vivia ali foi recentemente atacada e levada como escravos. O chalé está vazio. Um fogo ainda queima e sobre a mesa de jantar há cardadores para lã. Uma boneca está em um berço. Uma cadeira está derrubada e um jato de sangue coagulado mancha a parede. Nem os residentes nem os captores podem ser encontrados em nenhum lugar por perto, mas pegadas podem ser vistas na lama do lado de fora do chalé. Se as aventureiras rastrearem os captores (estatísticas típicas de bandidos, veja a página 183), descobrirão que o lorde local precisa de novos escravos para a sua mina de prata.',
    type: 'Floresta',
    table: '',
    id: 28,
  },
  {
    title: 'O CHACOALHAR DOS OSSOS',
    resume:
      'Eles surgem sem aviso. Um grupo que já foi composto de orgulhosos guerreiros humanos. Agora eles não passam de esqueletos arruinados, que por alguma razão receberam uma nova vida profana. Eles são totalmente silenciosos, mas quando começam a se mover vocês ouvem o som seco de ossos de centenas de anos, raspando uns contra os outros. Os crânios sorridentes dos esqueletos abrem suas mandíbulas quando atacam, emitindo um grito silencioso.',
    description:
      'D6+3 esqueletos atacam as aventureiras sem aviso. Eles lutam até o último homem, mas não são particularmente rápidos e é razoavelmente simples fugir deles. No entanto, os esqueletos perseguirão as aventureiras enquanto elas estiverem em sua linha de visão.\nOs atacantes têm estatísticas de jogo de esqueletos típicos, veja a página 106.',
    type: 'Floresta Sombria, Pântano, Charco, Ruínas',
    table: '',
    id: 29,
  },
  {
    title: 'TERAMALDA',
    resume:
      'O cheiro de carne carbonizada chega aos seus narizes, e ao mesmo tempo vocês ouvem os passos pesados. Algo está abrindo caminho pela vegetação. A criatura faz um barulho terrível, com guinchos e o som de metal batendo contra metal. O próprio chão treme. Quando emerge da vegetação diante de vocês, um gigantesco cavaleiro, completamente coberto por uma armadura antiga, escurecida e enferrujada. O peitoral da armadura tem um símbolo gravado nele. A criatura carrega uma espada, marrom de tanto sangue seco acumulado nela.',
    description:
      'A armadura ambulante é a estranha criatura morta-viva Teramalda, que vaga nas Terras Proibidas procurando por vingança desde que os anões a queimaram viva em sua armadura 350 anos atrás. A Irmandade Enferrujada a considera uma campeã do deus Ferrugem, e o peitoral da armadura carrega o símbolo do deus. Ela mata primariamente anões. Teramalda é mantida viva por um espigão de ferro mágico que foi enfiado no peito da Ferrale por dentro da armadura. Ela é praticamente invulnerável e não responderá se alguém falar com ela. Encontrar com Teramalda será diferente a cada vez:\n\n✥ PRIMEIRO ENCONTRO: Teramalda vai apenas ficar parada e olhar para as aventureiras por um tempo antes de decidir que elas não são interessantes o bastante. Se as aventureiras a atacarem, vá direto para o terceiro encontro.\n✥ SEGUNDO ENCONTRO: Teramalda atacará qualquer anã(o) do grupo.\n✥ TERCEIRO ENCONTRO: Teramalda classifica as aventureiras como inimigas e as ataca. Ela não as perseguirá se fugirem.\n✥ QUARTO ENCONTRO: Teramalda vê as aventureiras como inimigas juradas e as persegue. Ela anda lentamente e pode ser ouvida há uma boa distância, mas não desistirá nunca da perseguição. Ela encontrará seus inimigos enquanto eles carregarem qualquer coisa que seja feita de ferro.\n\nTERAMALDA\nFORÇA 12, AGILIDADE 4, ASTÚCIA 3, EMPATIA 2\nPERÍCIAS: Patrulha 2\nEQUIPAMENTO: Montante\nLENTA: CORRER é uma ação LENTA para Teramalda\nINVULNERÁVEL: Teramalda é imune a toda forma de dano. A única maneira de matá-la é remover o espigão de ferro mágico que foi enfiado em seu peito. Isso requer AGARRAR ou outra forma de imobilizá-la, e então fazer uma rolagem Formidável (-3) de POTÊNCIA (ação lenta).',
    type: 'Planície, Floresta Sombria, Pântano, Charco, Ruína',
    table: '',
    id: 30,
  },
  {
    title: 'OS AEDOS DA PEDRA',
    resume:
      'Uma estranha, gigantesca e desgastada estrutura se ergue na paisagem diante de vocês. Ela brilha de forma vaga, como se tivesse sido feita de metal misturado com pedra. A construção não é um prédio e não serve a nenhum propósito que vocês possam imaginar. Próximo a ela está um grupo de anões, ocupados com ferramentas de medição e mapas. Vocês são avistadas por um guarda armado com um machado, que aponta em sua direção.\n',
    description:
      'Anões do clã Belderande (veja a página 58) assumiram a responsabilidade de estender o globo mundial, um trabalho que esteve parado por causa das guerras e da Névoa de Sangue. No momento, eles estão checando a condição da antiga construção. O grupo é liderado pela aeda da pedra Porisia Garganta-de-prata e é acompanhado por alguns soldados agindo como guardas. Porisia é entusiasmada e vai falar alegremente sobre o trabalho para honrar o deus Vasto.',
    type: 'Colina, Montanha',
    table: '',
    id: 31,
  },
  {
    title: 'RATOS',
    resume:
      'Um som estridente faz vocês olharem montanha abaixo e verem trinta ratos se movendo sobre algo enrolado em tecido branco. Só quando o volume começa a gritar vocês percebem que os ratos encontraram um bebê vivo.',
    description:
      'O pequeno bebê halfling foi abandonado por sua mãe, que o jogou de um penhasco, em parte porque o pai do bebê é o homem que a escravizou, mas também porque ela sabe que não haverá comida o bastante para a criança sobreviver. Uma morte rápida seria melhor. Miraculosamente a criança sobreviveu à queda sem nenhum ferimento. Os ratos acabaram de descobrir o bebê, cujos gritos se tornarão cada vez mais altos. Se as aventureiras não salvarem o bebê, ele se silenciará em alguns minutos. A mãe, Belinda, vive em uma cabana decadente muito próxima. Uma vez por dia ela é visitada pelo pai da criança, um tirano que tem diversas famílias na região, que ele controla com a ajuda de dez bandidos armados. Belinda fingirá que ela não reconhece o bebê, mas se as aventureiras a pressionarem, ela vai ceder e contar tudo a elas.',
    type: 'Colina, Montanha',
    table: '',
    id: 32,
  },
  {
    title: 'O LAMENTO DO MINOTAURO',
    resume:
      'Um rugido assustador ecoa pela região. É um uivo cheio de grande fúria — e tristeza. Depois da próxima curva na estrada, vocês se deparam com uma cena terrível: quatro soldados foram destroçados em uma violenta batalha, e sobre os corpos, está um imponente Minotauro ensanguentado e soluçando. A fera está se curvando sobre o corpo de outro Minotauro, alvejado por uma dúzia de flechas. O Minotauro ruge sua angústia para o céu. E então se volta para vocês.',
    description:
      'Kaun, o parceiro de vida da Minotauro Markut, morreu em uma luta contra um grupo de soldados de um castelo próximo, liderados por um soldado experiente chamado Arren. Quatro sobreviventes da patrulha estão atualmente escondidos entre as árvores próximas. Markut não descansará até que todos os soldados estejam mortos. Os soldados de Arren estão com muito medo dela, mas também querem vingança pelos companheiros caídos e querem retomar o estandarte caído no chão em meio aos cadáveres. As aventureiras acabam no meio dessa situação. Que lado elas irão escolher?\n\nOS SOLDADOS\n\nFORÇA 4, AGILIDADE 3, ASTÚCIA 2, EMPATIA 2\nPERÍCIAS: Luta 2\nEQUIPAMENTO: Espada larga, escudo pequeno, armadura de couro batido\n\nMARKUT\n\nMarkut possui as estatísticas de jogo de um Minotauro típico (veja a página 104). Ela está armada com um machado de duas mãos.',
    type: 'Colina, Montanha',
    table: '',
    id: 33,
  },
  {
    title: 'OS MORTOS INQUIETOS',
    resume:
      'Uma companhia de bufões viaja ao longo da estrada, alguns a pé, outros em cima de carroças. Muitos deles estão pintados de forma berrante e vestidos com roupas cômicas, embora esse lugar em plena área selvagem não seja o mais indicado para uma apresentação. Os homens e mulheres escoltando a trupe a cavalo lhes cumprimentam de maneira tensa. Nenhum deles usa maquiagem ou pintura corporal.',
    description:
      'Uma observação mais próxima mostra que os bufões são estranhamente apáticos, assim como aparentam ser velhos e malcheirosos. Se solicitados a se apresentarem, eles não conseguirão responder, não conseguem fazer malabarismo nem mesmo com uma única bola, e os membros de seu corpo podem cair mesmo com a acrobacia mais simples. Os bufões são na realidade mortos inquietos (veja a página 106) pintados, que os aldeões agruparam e estão levando secretamente para um lugar seguro, onde a Irmandade Enferrujada não conseguirá encontrá-los.\nUma unidade de Guardas de Ferro (veja a página 40) está rastreando o grupo, e os alcançará momentos depois do encontro com as aventureiras. O Capitão Holmar está de bom humor, fingindo ignorância, exigindo uma apresentação para si e para os seus soldados. Depois de um tempo, Holmar irá parar com o fingimento. Os mortos serão levados até o templo mais próximo da Irmandade Enferrujada para serem reeducados como servos e soldados, enquanto a escolta deve ser aprisionada por desobediência blasfema. As aventureiras podem ajudar os aldeões, ou continuar em seu caminho. Se as aventureiras encontrarem a trupe novamente, os bufões mortos-vivos estão sendo arrebanhados com varas.',
    type: 'Planície, Floresta, Colina, Charco, Ruína',
    table: '',
    id: 34,
  },
  {
    title: 'O TROLL SONOLENTO',
    resume:
      'Um rugido terrível quebra o silêncio da região. Então vocês percebem o fedor. Em frente a vocês, as rochas da montanha parecem ter ganhado vida. Uma enorme figura cinza e manchada emerge da lateral da montanha, olhando para vocês com olhos frios e amarelados. Pesados braços de pedra são erguidos para o ar e vocês ouvem outro rugido. “Quem sããão vocês, pequenos veeermes que atrapalham Karrrg?”',
    description:
      'As aventureiras entraram, sem perceber, no covil do troll da montanha Karg e o acordaram de seu sono profundo. Karg fica com um tremendo mau humor de manhã, e não deixará que as aventureiras passem a não ser que elas tenham um presente para ele (ele gosta muito de coisas brilhantes), ou se elas lhe fornecerem um jantar consistindo em um dos suculentos goblins que podem ser encontrados nos arredores. Karg também aceita devorar uma das aventureiras ou seu cavalo em troca de passagem segura.\nLeia mais sobre trolls na página 114.',
    type: 'Montanha',
    table: '',
    id: 35,
  },
  {
    title: 'OS SEM PELOS',
    resume:
      'Um grupo de criaturas espreita por entre as rochas. Quatro figuras se aproximam, completamente enroladas em tecidos e armadas. O líder rosna como um lupino, mas seu rosto não possui nenhum pelo.',
    description:
      'O homem lobo Abaken e seus três amigos lupinos foram expulsos da alcateia quando perderam completamente seus pelos. Agora eles se escondem nas montanhas, esperando por alguém que possa curá-los da doença que os tornou “humanos”.\nAbaken pode contar para as aventureiras que ele e seus amigos seguiram uma cabra da montanha para dentro de cavernas subterrâneas. Lá dentro eles encontraram enormes cristais púrpuras e verdes. Dentro de um deles, parecia que um filhote de dragão negro dormia. Os quatro decidiram voltar até sua alcateia para serem aconselhados, mas em seu caminho eles ficaram fracos e doentes, perdendo todos os seus pelos. Talvez alguém aceite descer até o subterrâneo e fazer com que suas pelagens cresçam novamente. Os lupinos encontraram a arma secreta da Feiticeira Jagsatin: um filhote de dragão que ela pretendia treinar e usar em sua batalha contra Zygofer. No entanto, Jagsatin morreu séculos atrás. Os cristais nas cavernas estão contaminados, colocados ali para afastar intrusos. Se as aventureiras se aproximarem dos cristais, elas sofrerão uma doença com Virulência 9. Para levar o filhote de dragão, é necessário quebrar o cristal onde ele está adormecido, o que requer um ataque que cause pelo menos 4 pontos de dano. A cada rodada que elas estão próximas do cristal, é necessário fazer outra rolagem contra a infecção.\nO filhote de dragão é receptivo nos primeiros dias, e pode criar um vínculo com uma aventureira que fizer uma rolagem bem-sucedida de Adestramento. O dragão cresce rápido, e quanto mais velho ele ficar, mais inteligente e independente ficará.\n\nFILHOTE DE DRAGÃO: O filhote de dragão é um dragão (veja a página 84), mas quando for chocado ele tem apenas Força 4 e Valor de Armadura 3. Ambos os valores aumentam em um ponto por semana até que o dragão atinja seu tamanho máximo. No início o filhote de dragão é afetuoso, mas ele ficará cada vez mais indomável e finalmente deixará a aventureira a qual se vinculou.',
    type: 'Montanha',
    table: '',
    id: 36,
  },
  {
    title: 'BLOQUEIO NA ESTRADA',
    resume:
      'O caminho estreito segue à frente, ao redor da montanha. Quando vocês passam pela curva, enxergam uma passagem com penhascos íngremes, bem acima, dos dois lados do caminho. Alguém virou um vagão de carroça de lado, bloqueando a passagem adiante. O vagão está cheio de barris e sacos de areia. Não há nenhum movimento ou som. Não há nenhum caminho ao redor do bloqueio.',
    description:
      'O anão Guntermann decidiu compensar a sua mina que secou com uma taxação de viajantes e caravanas. Ele ergueu diversos bloqueios nas montanhas. O bloqueio é guardado por três anões. Quando atacados, eles soam uma trombeta e em D6 rodadas mais três anões aparecem. Se as aventureiras quiserem passar sem lutar, elas devem pagar 3 moedas de prata cada.\n\nGUERREIROS ANÕES\n\nFORÇA 4, AGILIDADE 3, ASTÚCIA 2, EMPATIA 2\nPERÍCIAS: Luta 3m Movimentação 2, Pontaria 3, Discernimento 4\nEQUIPAMENTO: Machado de batalha, armadura de couro batido, besta leve',
    type: 'Montanha',
    table: '',
    id: 37,
  },
  {
    title: 'A INFECTADA',
    resume:
      'Vocês veem um pequeno barco flutuando sem remos. Dentro dele há uma pilha de cobertores. Os cobertores se movem; há algo debaixo deles.',
    description:
      'A mulher no barco é uma humana chamada Linnaya, ela foi colocada no barco por ter a Praga Azul. O corpo dela está coberto de pústulas que vazam uma secreção azul. Ela está muito fraca, e a infecção fez com que ela não conseguisse mais falar. Se as aventureiras fizerem contato, elas correm o risco de serem infectadas. A Praga Azul é uma doença com Virulência 5.',
    type: 'Lago, Pântano',
    table: '',
    id: 38,
  },
  {
    title: 'O CLANDESTINO',
    resume:
      'Uma vela branca e brilhante pode ser vista, e então outra. Em frente a vocês, um grande navio de madeira aparece no lago. Vocês percebem meia dúzia de pessoas trabalhando no convés. Um deles acena para vocês com seu chapéu.',
    description:
      'A nau mercante Maçã Lunar está velejando com uma carga de especiarias, carne e diversas outras mercadorias para uma aldeia do outro lado do lago. Os marinheiros estão entediados e trocarão alegremente histórias e itens com as aventureiras. Capitão Sertold até considera servir um jantar a elas em seus aposentos caso elas queiram passar a noite.\nO que Sertold não sabe é que o Maçã Lunar tem um clandestino na forma do goblin Meroggha. Ele está fugindo de seu irmão brutal, que é um líder de clã regional. Quando as aventureiras continuarem em sua jornada, o goblin terá se escondido no barco delas.',
    type: 'Lago',
    table: '',
    id: 39,
  },
  {
    title: 'A MORTEVEM DE BAIXO',
    resume:
      'Subitamente, parece que a água ao redor da embarcação de vocês começa a ferver. Algo está se movendo abaixo, algo grande. Em seguida, o barco inclina por causa de uma batida no casco, e vocês quase caem na água. Depois disso, tudo ocorre muito rápido. Primeiro um, depois dois, e então três tentáculos gigantes se erguem dos dois lados do barco. Eles agarram a embarcação, preparando-se para puxá- la para dentro d’água. O monstro das profundezas obviamente não quer que vocês viajem em paz.',
    description:
      'Um polvo gigante está atacando a embarcação. Quando as aventureiras tiverem cortado metade de seus tentáculos, o monstro voltará para as profundezas. Leia mais sobre polvos gigantes na página 108 no capítulo Bestiário.',
    type: 'Lago, Pântano',
    table: '',
    id: 40,
  },
  {
    title: 'O MERCADOR DE ALMAS',
    resume:
      'Um pequeno barco à vela cruza lentamente a água. Dez lâmpadas à óleo iluminam o barco, uma lira está tocando, e no topo do mastro uma flâmula colorida está hasteada. Há três pessoas no barco.',
    description:
      'O mercador Vergevil quer discutir uma troca com as aventureiras. Os bens são protegidos por suas irmãs Ginda e Aneta (estatísticas como as de soldados típicos na página 183). A carga do barco inclui um número de coisas peculiares. Vergevil recentemente colocou suas mãos em uma coleção de almas que ele mantém em garrafas de vinho com a magia VINCULAR A ALMA (veja a página 139 do Manual do Jogador). Se as aventureiras observarem uma das garrafas, elas verão uma forma gasosa se movendo dentro dela e um som fraco de uma voz ou de um suspiro pode ser ouvido. Vergevil não faz ideia do que realmente está dentro das garrafas, mas ele sabe que é algo mágico e ele quer vendê- las como poderosos artefatos. Ele quer 10 pratas por cada garrafa, mas ele também pode concordar em trocá-las por outros itens valiosos. Se a garrafa for aberta, a alma escapa. Um Druida com a magia RESSURREIÇÃO (veja a página 124 do Manual do Jogador) pode fazer com que a alma entre em um animal ou até mesmo dar a uma criatura senciente uma segunda personalidade. Role D6. De 1-3, a alma mantém sua personalidade original e pode agir racionalmente. De 4-6, a alma enlouqueceu e vai agir irracionalmente.',
    type: 'Lago, Pântano',
    table: '',
    id: 41,
  },
  {
    title: 'OS CAÇADORES REPTILIANOS',
    resume:
      'Um estranho cacarejo pode ser ouvido. Ele é ecoado por mais cacarejos vindos de outra direção. Depois, de uma terceira direção. Na neblina, vocês veem um número de estranhas criaturas movendo-se em sua direção. A pele delas é escamosa e cinza, elas têm dentes afiados e olhos amarelados. “Pooooorcos?”, alguém sibila. “Pooorcos graaaandes,” de outra voz sibilada. “Poooorcos, graaandes e feeeeios, vocêêês consegueeeem falaaaar?”\n',
    description:
      'Um grupo de Sáurios, igual ao número de aventureiras mais D6 chega até elas. Eles estão caçando, e estão armados com lanças e porretes. Sheeerz, o líder, perdeu seus pais para caçadores humanos e, portanto, odeia todos os humanos (que os Sáurios veem como porcos grandes, embora não saibam com clareza se humanos são comida ou algo útil de outra maneira), mas eles não são particularmente hostis com outras raças. \nSÁURIOS\n\nFORÇA 4, AGILIDADE 3, ASTÚCIA 2, EMPATIA 2\nPERÍCIAS: Furtividade 2, Luta 2, Sobrevivência 2, Patrulha 2\nARMADURA: 4 (escamas)\nEQUIPAMENTO: Tridentes ou Lanças longas e porretes',
    type: 'Pântano, Charco',
    table: '',
    id: 42,
  },
  {
    title: 'ENTERRADOS VIVOS',
    resume:
      'Vocês ouvem gritos distantes, choros atormentados de agonia. Quando vocês se aproximam, veem uma área aberta entre algumas casas de pedra abandonadas. Sete elfos armados com espadas e arcos estão diante de um fosso profundo. Todos usam penas azuis em seus cabelos. No fosso está uma família élfica: uma mulher, um homem e duas crianças. Eles pedem por ajuda, mas não tentam subir pelas beiradas do fosso. Dois dos elfos na beirada do fosso estão usando pás para enterrar a família viva.',
    description:
      'A elfa Penazul e os caçadores de recompensa encontraram a família Ylendidra, que fugiu depois de ter sido revelado que eles estavam abrigando orcs sentenciados à morte. Penazul deveria levar a família de volta para um julgamento, mas depois que a mãe a atacou com uma faca, ela decidiu executá-los por conta própria.\n\nCAÇADORES DE RECOMPENSAS\n\nFORÇA 2, AGILIDADE 4, ASTÚCIA 3, EMPATIA 2\nPERÍCIAS: Luta 3, Movimentação 3, Pontaria 3, Patrulha 4, Sobrevivência 3, Discernimento 3\nEQUIPAMENTO: Armadura de couro batido, arco, espada larga',
    type: 'Ruína',
    table: '',
    id: 43,
  },
];
