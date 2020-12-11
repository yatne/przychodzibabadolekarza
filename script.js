const jokes = [
    `<p>Przychodzi baba do lekarza. Lekarz się pyta:<br />
- Coś dawno pani u mnie nie było?<br />
Baba: <br />
- A bo byłam chora.</p>
`,
    `<p>Przychodzi baba do lekarza z wróblem w d**ie. <br />
- Co pani jest? <br />
- Mnie nic, ale mężowi chyba ptaka urwało.</p>
`,
    `<p>Przychodzi baba do lekarza. <br />
- No i co, czy pomogły pani te lekarstwa co przypisałem na hemoroidy? <br />
- Tak, pół na pół. <br />
- Jak to? <br />
- Te długie śliskie tabletki to jakoś połknęłam, ale ten krem, co mi pan przepisał, to nawet z chlebem zjeść nie mogłam.</p>
`,
    `<p>Przychodzi baba do lekarza, lekarz jej każe oddać mocz do analizy. <br />
- Gdzie mam go oddać? <br />
- Do słoika - stoi na szafie. <br />
... i lekarz wychodzi z pokoju, wraca za 5 minut i widzi cały pokój zasikany <br />
- Co pani narobiła? <br />
- A myli pan, że to tak łatwo nasikać do słoika stojącego na szafie?</p>
`,
    `<p>Baba w sklepie pyta się:<br />
- Przepraszam, czy mogę przymierzyć tę sukienkę na wystawie?<br />
Na to sprzedawczyni:<br />
- Bardzo proszę ale mamy też przymierzalnię.</p>
`,
    `<p>Przychodzi baba do lekarza i mówi:<br />
- Panie doktorze, mam migrenę!<br />
Lekarz na to:<br />
- Migrenę może mieć królowa angielska, panią tylko łeb nap...dala.</p>
`,
    `<p>Przychodzi baba z dzieckiem do lekarza.<br />
- Czy dziecko przechodziło odrę? - pyta lekarz.<br />
- Ta gdzie tam, panie, my zza Buga...</p>
`,
    `<p>Przychodzi baba do lekarza i mówi: <br />
- Panie doktorze, za ile wyzdrowieję? <br />
A lekarz na to: <br />
- Za parę tysięcy...</p>
`,
    `<p>Przychodzi baba do ginekologa, rozbiera się i siada na fotel. <br />
- Bardzo mnie boli tam w środku. Wyżej, jeszcze wyżej... <br />
- Podejrzewam, że jest to zapalenie migdałów.</p>
`,
    `<p>Baba umarła i nie przychodzi już do lekarza, więc lekarz udaje się na jej grób. I słyszy zduszony głos: <br />
- Panie doktorze, ma pan coś na robaki?</p>
`,
    `<p>Przychodzi baba do lekarza:<br />
- Co pani przysparza kłopotów?<br />
- Mój stary, ale przyszłam do pana, bo mnie wątroba boli...</p>
`,
    `<p>Przychodzi baba do lekarza z kierownicą na plecach. Lekarz mówi: <br />
- Kto panią tu skierował?</p>
`,
    `<p>Młodzian idąc przez wieś, zapytuje leciwą gospodynię:<br />
- Babciu, jak tu najłatwiej trafić do szpitala?<br />
- Powiedz mi jeszcze raz "babciu", to zaraz tam się znajdziesz!</p>
`,
    `<p>Przychodzi baba do lekarza cala zarzygana. A lekarz:<br />
- Wyliże się pani z tego.</p>
`,
    `<p>Przychodzi Baba do Lekarza :<br />
- Panie doktorze wyrostek mi dokucza<br />
- A w mordę gówniarza to się zaraz odczepi.</p>
`,
    `<p>Przychodzi baba do lekarza i mówi: <br />
- Panie doktorze, nie mam włosów na pi**e! <br />
Doktor ogląda i mówi: <br />
- A ile razy pani dziennie TO robi??? <br />
- Nooooo, 5-6 razy!!! <br />
- Proszę pani! Na autostradzie też trawa nie rośnie...</p>
`,
    `<p>Przychodzi baba do lekarza z telefonem na plecach, a lekarz na to:<br />
- Kto pani taki numer wykręcił?!</p>
`,
    `<p>- Dziś kaszle pani o wiele lepiej niż wczoraj...<br />
- Tak, panie doktorze, bo ja przez całą noc trenowałam!</p>
`,
    `<p>Przychodzi zezowata baba do zezowatego lekarza:<br />
Lekarz: pojedyńczo proszę!<br />
Baba: ja do tego pod oknem!</p>
`,
    `<p>Przychodzi baba do lekarza z telewizorem na głowie i ekspresem do kawy w rękach. Lekarz się pyta:<br />
- Co pani jest?<br />
- Teleexpress.</p>
`,
    `<p>Przychodzi baba z zezem zbieżnym do lekarza: <br />
- Co pani taka skupiona?</p>
`,
    `<p>Przychodzi baba do lekarza. Ten j zbadał, a że był to lekarz prywatny, to przyszło w końcu do płacenia. Baba zaczyna się rozbierać i powiada: <br />
- Nie mam przy sobie pieniędzy, więc zapłacę panu w naturze. <br />
Lekarz podrapał się po głowie i pomylał: "No cóż, skoro nie mogę dostać pieniędzy, dobre i to". Przed przystpieniem do pobrania opłaty, jednakże, spojrzał na babę i zapytał: <br />
- Zaraz, zaraz. Czemu ma pani taki czarny brzuch? <br />
A baba na to: <br />
- Aaa, przed chwilą płaciłam za węgiel.</p>
`,
    `<p>Przychodzi wielka baba do lekarza, a on na to: Pani problem mnie przerasta.</p>
`,
    `<p>Przychodzi baba do lekarza i mówi: <br />
- Panie doktorze, z moim mężem coś nie w porządku. Ubzdurał sobie, że jest śnieżnym bałwanem. Stoi na podwórku z garnkiem na głowie, z miotłą w ręku. <br />
- Proszę go do mnie przyprowadzić. <br />
Po godzinie baba wraca i mówi: <br />
- Panie doktorze, nic z tego. Została z niego tylko kałuża wody, garnek i miotła! <br />
</p>
`,
    `<p>Przychodzi baba do lekarza: <br />
- Powinna pani jeść dużo owoców i to najlepiej bez obierania. <br />
Baba dziękuje za diagnozę i zbiera się do wyjścia. <br />
- A tak a propos, jakie owoce pani jada najczęściej? - pyta lekarz. <br />
- Orzechy.</p>
`,
    `<p>Przychodzi baba w ciąży do lekarza.<br />
- Coś pani dolega?<br />
- A tak sobie zaszłam...</p>
`,
    `<p>Do lekarza przychodzi facet z żona.<br />
- Panie doktorze, ja chyba jestem chory. Moja żona mnie w ogóle nie podnieca...<br />
- Proszę, niech pan wyjdzie do poczekalni... A pani niech teraz zdejmie stanik, majtki i położy się na leżance... no dobrze, może się pani ubrać.<br />
Woła męża.<br />
- Niech się pan nie martwi, jest pan zupełnie zdrowy. Ona mnie też nie podnieca.</p>
`,
    `<p>Przychodzi baba do lekarza z żabą na głowie.<br />
- Co się stało? - pyta się lekarz.<br />
- Coś mi się przykleiło do dupy - odpowiada żaba.</p>
`,
    `<p>Przychodzi baba do dentysty, siada w fotelu i od razu ciąga majtki. <br />
- Ależ droga pani! - protestuje lekarz - Ja jestem dentystą, ginekolog przyjmuje piętro niżej! <br />
- Nie ma żadnej pomyłki. - odpowiada baba - Zakładał pan wczoraj mojemu staremu sztuczną szczękę?<br />
- Tak.<br />
- No to teraz ją pan wyciągaj!</p>
`,
    `<p>Przychodzi baba do lekarza i już od progu wywija nogą. <br />
- Co pani jest? - pyta się zdziwiony lekarz. <br />
- Hulajnoga.</p>
`,
    `<p>Przychodzi baba do ginekologa. <br />
- Proszę się rozebrać! <br />
- Kiedy ja się wstydzę, panie doktorze. <br />
- To może ja od razu zgaszę światło?</p>
`,
    `<p>Przychodzi baba do lekarza nago, z karabinem.<br />
- Co pani jest pyta lekarz?<br />
- Naga broń!</p>
`,
    `<p>Przychodzi baba do lekarza. Po badaniu lekarz mówi - ma pani raka!<br />
- Baba na to: Niech pan coś zaradzi doktorze!<br />
- Niech pani spróbuje robić okłady z błota.<br />
- Z błota? Dziwi się baba, myśli pan że pomogą?<br />
- Nie wiem czy pomogą, mówi lekarz, ale niech się pani pomału przyzwyczaja do ziemi.</p>
`,
    `<p>Przychodzi baba do lekarza i mówi:<br />
- Panie doktorze ja jestem taka leniwa. Jak się położę to, bym tak leżała, leżała, leżała... A jak usiądę, to bym tak siedziała, siedziała, siedziała...<br />
Lekarz się zdenerwował że mu głowę takimi rzeczami zawraca i rzekł:<br />
- A jakbym panią kopnął w dupę, to pani by tak leciała, leciała, leciała...</p>
`,
    `<p>Przychodzi baba do lekarza i mówi:<br />
- Panie doktorze, koniecznie potrzebuje dla siebie jakiejś rozrywki.<br />
- Jakiego rodzaju?<br />
- Noo, najlepiej rodzaju męskiego.</p>
`,
    `<p>Lekarz przegląda opis choroby pacjentki i mówi:<br />
- Oj, nie podoba mi się pani, nie podoba...<br />
- Pan, panie doktorze, też nie należy do najprzystojniejszych...</p>
`,
    `<p>Baba mówi do lekarza:<br />
- Ach, panie doktorze! Nigdy panu tego nie zapomnę. Jestem panu winna życie!<br />
- No, nie przesadzajmy, droga pani. Jest mi pani winna tylko za pięć wizyt!<br />
</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Panie doktorze, nikt nie zwraca na mnie uwagi.<br />
Lekarz:<br />
- Następna proszę!</p>
`,
    `<p>Przychodzi baba do lekarza, a lekarz biega wokół biurka. Po godzinie baba pyta:<br />
- Co pan doktor robi?<br />
- Bo ja jestem lekarz okręgowy!</p>
`,
    `<p>- Panie doktorze, mój mąż zaraził się rzeżączką. Co mam robić? Co robić?!!!<br />
- A czemu mąż sam do mnie z tym nie przyszedł?<br />
- Bo jeszcze o tym nie wie.</p>
`,
    `<p>Przychodzi baba do lekarza i już od progu skacze:<br />
- Co się stało - pyta doktor.<br />
- Mówiłam, że sprężynka jest za długa - odpowiada baba.</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Proszę się rozebrać i położyć na kozetce.<br />
- Panie doktorze, ja dzisiaj naprawdę jestem chora, a pan jak zwykle o seksie.</p>
`,
    `<p>Przychodzi baba do lekarza z pługiem w plecach, a lekarz na to: ooo żesz ty!</p>
`,
    `<p>Panie doktorze, łykam te tabletki, łykam, ale nie chudnę.<br />
- To nie możliwe! A bierze je pani, tak jak kazałem, dziesięć razy dziennie?<br />
- Oczywiście. Jedna po każdym większym posiłku.</p>
`,
    `<p>Babka kupiła sobie szafę. Po przywiezieniu jej do domu zaczęła ją składać. Pod jej oknem biegła linia tramwajowa... złożyła tę szafę ale tramwaj przejechał i szafa sie złożyła... mówi więc do siebie: Sama nie dam rady. Zawołała sąsiada. Ten złożył szafe od nowa, ale przejechał tramwaj i szafa się złożyła. Sąsiad wpadł na pomysł i mówi: Wie pani co?? ja wejdę do środka i zobaczę, co się tam składa. Wszedł a do domu wrócił mąż i zajrzał do szafy, a sąsiad: Ja wiem że to głupio wygląda ale ja naprawdę czekam na ten tramwaj...</p>
`,
    `<p>Przychodzi baba do lekarza z szybą w plecach.<br />
Lekarz: Co pani jest?<br />
Baba: Szybowiec.</p>
`,
    `<p>Przychodzi baba do lekarza: <br />
- Panie doktorze, mój problem to za duże potrzeby seksualne... <br />
- To niech pani wyjdzie za mąż. <br />
- Mam już męża. <br />
- To niech pani znajdzie sobie kochanka. <br />
- Już mam. <br />
- To niech pani weźmie drugiego. <br />
- Mam drugiego, i jeszcze innych trzech. <br />
- Hmmm, wydaje mi się, że pani jest rzeczywiście chora. <br />
- Panie doktorze, niech mi pan to da na piśmie, bo mąż mówi, że jestem k*.*a!</p>
`,
    `<p>Przychodzi baba do lekarza:<br />
- Panie doktorze, wszyscy mówią, że jestem strasznie tępa.<br />
- Proszę o więcej szczegółów.<br />
- Znaczy co?!</p>
`,
    `<p>Przychodzi Baba do lekarza:<br />
- Panie doktorze po tej kuracji hormonalnej strasznie rosną mi włosy!<br />
- Niemożliwe! A gdzie najwięcej?<br />
- Na jądrach.</p>
`,
    `<p>Przychodzi baba do lekarza z poparzonymi uszami. <br />
Lekarz się pyta: co się pani stało? <br />
Prasowałam gdy zadzwonił telefon. <br />
A drugie ucho? <br />
Chciałam zadzwonić na pogotowie.</p>
`,
    `<p>Przyszła połowa baby do lekarza. Lekarz pyta: <br />
- Co się stało? <br />
- Mąż mnie przerżnął.<br />
- A gdzie druga połowa? <br />
- Wypiliśmy...</p>
`,
    `<p>Przychodzi baba do lekarza, a lekarz się jej pyta: <br />
- Kim Pani jest z zawodu? <br />
- Nauczycielką. <br />
- Taaa?? To niech mi Pani pałę postawi.</p>
`,
    `<p>- Panie doktorze, mój mąż strasznie mnie obraził.<br />
- I dlatego musi mnie pani budzić w środku nocy?<br />
- Tak, bo teraz trzeba go będzie pozszywać.</p>
`,
    `<p>Leżała gruba baba na plaży, przyjechał Grennpeace i zepchnął ją do morza.</p>
`,
    `<p>Przychodzi baba do lekarza z gwoździem w uchu.<br />
- Co pani dolega ? - pyta lekarz.<br />
- Słucham metalu! - odpowiada baba.</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Panie doktorze, nikt nie traktuje mnie poważnie.<br />
- Żartuje pani!!!?</p>
`,
    `<p>Przychodzi baba do lekarza z zapalonym papierosem w uchu <br />
- Co pani jest? <br />
- Słucham żara</p>
`,
    `<p>Przychodzi baba do dentysty:<br />
- Panie doktorze, tak strasznie boje się borowania, że chyba wołałabym już zajść w ciąże.<br />
- To niech się pani zdecyduje, bo nie wiem, jak fotel mam ustawić.</p>
`,
    `<p>Przychodzi baba do lekarza, a lekarz mówi:<br />
- Co pani dolega?<br />
- Mam bardzo słaby wzrok<br />
Na to lekarz:<br />
- Proszę jeść dużo marchewek tak jak królik.<br />
- Co? - zdziwiła się baba.<br />
- No tak widziała pani kiedyś królika w okularach???</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Proszę się rozebrać.<br />
- A gdzie mam położyć ubranie?<br />
- Obok mojego...</p>
`,
    `<p>- Panie doktorze, podczas pobytu na wczasach zaraziłem się wstydliwą chorobą. Czy to przejdzie?<br />
- Przejdzie, przejdzie... na żonę.</p>
`,
    `<p>Przychodzi baba do lekarza, a lekarz pyta: <br />
- Ile ma Pani lat? <br />
Ona na to: <br />
- 62. <br />
Lekarz się zamyślił, coś pokombinował w głowie i mówi: <br />
- No, więcej nie będzie!</p>
`,
    `<p>Przychodzi baba do lekarza ze śmigłem w dupie. A lekarz na to:<br />
- Kto panią tak przeleciał?</p>
`,
    `<p>Przychodzi baba do lekarza:<br />
- Panie doktorze, dziękuję za wspaniałe leczenie.<br />
- Ależ ja leczyłem pani mężą, nie panią!<br />
- Tak, tak, ale ja po nim wszystko dziedziczę...</p>
`,
    `<p>Przychodzi baba do lekarza i pyta:<br />
- Panie doktorze, czy po wybuchu bomby atomowej będę mogła zajść w ciążę? <br />
Na to lekarz: <br />
- Nie widzę przeszkód, tylko gdzie pani znajdzie swoją dupę?</p>
`,
    `<p>Przychodzi pół baby do lekarza lekarz się pyta:<br />
- Co pani jest?<br />
- Ba!</p>
`,
    `<p>Przychodzi baba z córką do lekarza. Córka jest piękna i seksowna. Lekarz od razu każe jej się rozebrać. Baba protestuje: <br />
- Ależ panie doktorze, to ja jestem chora! <br />
- To proszę pokazać gardło - mówi lekarz.</p>
`,
    `<p>Przychodzi OLBRZYMIA baba do lekarza:<br />
- Pani problem mnie przerasta...</p>
`,
    `<p>Przychodzi baba do lekarza:<br />
- Panie doktorze, dzwoni mi w uszach! Co mam robić?<br />
- Przede wszystkim: nie otwierać.</p>
`,
    `<p>Przychodzi baba do lekarza i skarży się:<br />
- Panie doktorze, wszyscy mnie ignorują.<br />
- Następny proszę! - woła lekarz</p>
`,
    `<p>Przychodzi baba do lekarza z piaskiem w zębach, a lekarz pyta:<br />
- Co pani jest?<br />
- Glebogryzarka.</p>
`,
    `<p>Klient rozwiązuje krzyżówkę i pyta innego:<br />
- Otwór u baby na literę *p*.<br />
- Poziomo czy pionowo.<br />
- Poziomo.<br />
- To pisz *pysk*.</p>
`,
    `<p>Przychodzi baba do lekarza. <br />
- Panie doktorze, wszyscy znajomi mężczyźni mówią mi, że mam pochwę jak studnia... <br />
- Proszę się rozebrać i na samolocik. <br />
Po chwili ostrożnie zagląda. <br />
- Nic dziwnego, ...ego, ...ego, ...ego...</p>
`,
    `<p>Przychodzi baba do lekarza z piłą tarczową w d..ie. <br />
Lekarz: Co pani jest? <br />
Baba: Rżnę się na okrągło!</p>
`,
    `<p>Przychodzi baba do lekarza i jest cała pokryta od stóp do głowy muchami... na to lekarz lekko zdziwiony się pyta: <br />
- Co pani dolega? <br />
Baba: <br />
- Zostałam zmuszona...</p>
`,
    `<p>Przychodzi garbata baba do lekarza: <br />
- Co pani jest? <br />
- Ciąża pozamaciczna...</p>
`,
    `<p>Przychodzi baba do lekarza, a lekarz się pyta: <br />
- Co pani jest? <br />
- Panie doktorze, zaszłam... <br />
- To niech pani odejdzie. <br />
- Kiedy ja nie od chodzenia, tylko od pieprzenia... <br />
- To niech się pani odpieprzy.</p>
`,
    `<p>Przychodzi baba do lekarza:<br />
- Panie doktorze, wydaje mi się, że jestem niewidzialna!<br />
- Kto to powiedział?!</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Panie doktorze, nikt nie traktuje mnie poważnie.<br />
- Żartuje pani!!!?</p>
`,
    `<p>Przychodzi baba do lekarza i mówi:<br />
- Mam dziwny problem i potrzebuję pańskiej rady.<br />
- Może pani opisać, co pani dolega?<br />
- Hm, będzie łatwiej, jeśli panu pokażę ? powiedziała i zaczęła się rozbierać. Kiedy została tylko w bieliźnie, usiadła na brzegu łóżka i rozchyliła nogi, by osłonić dwa małe, zielone kółeczka na wewnętrznej stronie ud ? To nie boli, ale trochę się nimi martwię.<br />
Lekarz przyjrzał się dokładnie kółeczkom i spytał:<br />
- Czy przypadkiem nie jest pani lesbijką?<br />
Zakłopotana i całkiem zaskoczona tym pytaniem, szczególnie, że padło z ust mężczyzny trzymającego głowę między jej udami, odpowiedziała:<br />
- Hm, no tak. A dlaczego pan pyta?<br />
- Obawiam się, że będzie pani musiała powiedzieć swojej dziewczynie, że jej kolczyki nie są z prawdziwego złota</p>
`,
    `<p>Przychodzi baba do lekarza a lekarz tez baba...</p>
`,
    `<p>Przychodzi baba do lekarza z całym workiem papieru toaletowego: <br />
- Po co to pani? <br />
- Bo słyszałam, że z pana jest zasrany specjalista.</p>
`,
    `<p>Przychodzi baba do lekarza. <br />
- Panie doktorze, gdy prowadzę samochód zawsze mylę o sexie. Co mam robić? <br />
- Musi pani kupić samochód z automatyczn skrzynią biegów.</p>
`,
    `<p>Ach, przychodzi baba do lekarza i mówi: - Panie doktorze, wszyscy mówią mi, że ja jestem nienormalna, lubię naleśniki. <br />
- Ależ skąd, ja też lubię naleniki - odpowiada lekarz. <br />
- Och, to ja pana bardzo zapraszam, mam cała szafę naleśników.</p>
`,
    `<p>Przychodzi pól baby do lekarza, a lekarz pyta:<br />
- Co Pani dolega?!<br />
A ona mu odpowiada:<br />
- Ba!</p>
`,
    `<p>Przychodzi baba do lekarza i mówi: <br />
- Panie doktorze, coś mi w d**ę wlazło. <br />
- Nie wie pani, co? <br />
- Chyba dłużnik...</p>
`,
    `<p>Przychodzi baba do lekarza: <br />
- Panie doktorze, mam wytrzeszcz, co robić?! <br />
- Poluźnić warkocz!</p>
`,
    `<p>Przychodzi baba z dzieckiem do lekarza, lekarz do niej: <br />
- Proszę się rozebrać i położyć. <br />
- Ale, panie doktorze! To moje dziecko jest chore! <br />
- Jemu już nic nie pomoże, zrobimy drugie.</p>
`,
    `<p>Przychodzi Baba do lekarza staje w drzwiach i mówi: Hail Hitler!<br />
Lekarz spogląda na nią zdziwiony i pyta:<br />
- Co pani jest? Przecież wojna już się dawno skończyła!<br />
A Baba na to:<br />
- Ale ja Pana poznałam doktorze Mengele.</p>
`,
    `<p>Przychodzi baba do lekarza.<br />
- Panie doktorze mam gwiżdżące piersi.<br />
- To niemożliwe. Niech pani zdejmie biustonosz.<br />
Baba zdjęła biustonosz, a piersi fiuuuu, gwizdnęły o podłogę!</p>
`,
    `<p>Przychodzi goła baba do lekarza z karabinem w ręce. <br />
- Co pani dolega? <br />
- Naga broń.</p>
`,
    `<p>Przychodzi baba do lekarza z parówką w du..., a lekarz się pyta: co pani jest?<br />
Hot - dog odpowiada baba.</p>`

];

function nextJoke() {
    document.getElementById("baba").innerHTML = jokes[Math.floor(Math.random() * jokes.length)];
}

nextJoke();
