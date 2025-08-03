---
title: 'Typy generyczne i wylicznikowe w Javie'
date: "16-04-2024"
categories:
    - Programming
    - Java
---

# Typy generyczne i wylicznikowe w Javie

![Blog image](/programming/programming-generics-enum-java.png)

Witam w kolejnym artykule z serii podstawowych konstrukcji i narzędzi w Javie! Tym razem zajmę się szczegółowym opisem typów generycznych (generics) i wylicznikowych (enums).

## Typy generyczne (generics)

Na początek przyjrzyjmy się typom generycznym. W skrócie jest to mechanizm, który pozwala na tworzenie kodu bardziej uniwersalnego, niezależnego od konkretnego typu danych. Dzięki typom generycznym możemy tworzyć czytelniejszy i zwięźlejszy kod, który jest zgodny z zasadą DRY (Don't Repeat Yourself).

Korzystając z generyków można zdefiniować klasę lub metodę, która może być używana z różnymi typami danych, bez konieczności pisania osobnej implementacji dla każdego typu. Rozważ poniższy przykład:

![Blog image](/programming/utils/javagenericsenum-1.png)

Na powyższym obrazku widzimy prostą klasę List. Używa ona parametru generycznego T, który może być dowolnym typem danych np. Integer, String, Double (musi być typu obiektowego, nie prymitywnego!). W zależności od tego, jaki typ wybierzemy przy tworzeniu obiektu tej klasy wszystkie metody i pola będą dostosowane do tego typu.

Załóżmy, że wybierzemy typ Integer. Tworzymy więc obiekt klasy List sparametryzowany typem Integer:

![Blog image](/programming/utils/javagenericsenum-2.png)

Oczywiście ze względu na implementację naszego konstruktora podajemy w jego argumencie rozmiar naszej listy, w tym przypadku 5. W momencie utworzenia takiego obiektu inicjalizujemy pole "elements" w naszej klasie tablicą, która przechowuje obiekty typu generycznego, który wybraliśmy (w tym przypadku Integer) i posiada rozmiar określony przez nas w konstruktorze.

Następnie możemy wywołać na naszym nowo utworzonym obiekcie metodę add():

![Blog image](/programming/utils/javagenericsenum-3.png)

Podałem jako argumenty tej metody kolejno 2003 i 0. Spójrz na implementację tej metody w klasie List. Jako pierwszy parametr metoda ta przyjmuje element typu generycznego, który wybraliśmy (w tym przypadku nadal jest to Integer), a jako drugi indeks, na którym umieścić element w tablicy. Wszystko więc zadziała tak jak należy dlatego, że od momentu utworzenia obiektu naszej klasy, pole typu tablicowego zostało zainicjalizowane tablicą przechowującą Integery. Gdybyśmy chcieli zamiast 2003 podać jako argument jakiś String, przykładowo "siema", to nie będziemy mogli tego zrobić:

![Blog image](/programming/utils/javagenericsenum-4.png)

Na koniec na obiekcie "integers" wywołam metodę get(), oraz przypiszę jej wynik do zmiennej:

![Blog image](/programming/utils/javagenericsenum-5.png)

Podałem jako argument liczbę 0, która odzwierciedla interesujący mnie indeks z tablicy. Metoda dostając liczbę 0 szuka w tablicy elementu, który znajduje się na tym indeksie i zwraca go. Zwróć uwagę, że typ zwracany tej metody to T, czyli nasz parametr generyczny. Pamiętając o tym, że w tym przypadku nadal jest to Integer można łatwo się domyślić, że w tym obiekcie metoda ta zwraca po prostu obiekt typu Integer, zatem mogę bez problemu przypisać sobie wywołanie tej metody do zmiennej typu Integer, czy nawet int (ze względu na kompatybilność typów prymitywnych z ich obiektowymi odpowiednikami). Gdybym teraz użył metody println() i jako jej argument podałbym zmienną birthYear, to zobaczyłbym na ekranie liczbę 2003.

## Dziedziczące typy generyczne

Odnoszą się do sytuacji, w której parametr generyczny może być tylko klasy, która dziedziczy po określonej przez nas klasie lub implementuje jakiś interfejs.

![Blog image](/programming/utils/javagenericsenum-6.png)

Powyższa klasa Container używa parametru generycznego T, który dziedziczy po klasie Animal. Oznacza to w praktyce, że w miejsce parametru T możemy wstawić jedynie klasę, która dziedziczy po klasie Animal. Pora pokazać jak to wygląda na praktycznym przykładzie.

![Blog image](/programming/utils/javagenericsenum-7.png)

![Blog image](/programming/utils/javagenericsenum-8.png)

![Blog image](/programming/utils/javagenericsenum-9.png)

Na pierwszym z powyższych obrazków widzimy klasę abstrakcyjną Animal, która stanowi bazę dla innych klas reprezentujących konkretne zwierzęta.

Kolejny obrazek to klasa konkretna Dog, która dziedziczy po klasie Animal. Implementuje ona metodę makeSound() oraz używa wewnątrz swojego konstruktora słowa super do wywołania konstruktora klasy Animal.

Podobnie w przypadku trzeciego obrazka, który przedstawia implementację klasy konkretnej Cat.

Teraz przejdziemy do klasy Main, w której zostanie zaprezentowane działanie i współpraca wszystkich powyższych klas.

![Blog image](/programming/utils/javagenericsenum-10.png)

Pierwsza linijka ciała metody main() to utworzenie obiektu klasy Container parametryzowanej typem Animal. Oznacza to, że klasa ta działa tylko na obiektach klasy Animal (czyli także obiektach klas, które po niej dziedziczą). Można także określić jako parametr tej klasy klasę Dog lub Cat, ponieważ obie dziedziczą po klasie Animal. Wówczas mielibyśmy kontener operujący tylko na obiektach klasy Dog lub Cat. W konstruktorze określono także rozmiar kontenera na 5.

Kolejne dwie linijki to po prostu utworzenie obiektów klasy Dog i Cat.

Piąta i szósta linijka to wywołanie metody add() na obiekcie klasy Container parametryzowanej typem Animal. Pierwszym argumentem tej metody jest element typu T. Jak już nam wiadomo, w tym przypadku typem T jest klasa Animal, czyli sama ta klasa lub któraś z dziedziczących po niej. Oznacza to, że metoda przyjmie zarówno obiekty klasy Cat jak i Dog. Po tych dwóch linijkach nasz kontener przechowuje obiekt klasy Dog na indeksie 0 oraz obiekt klasy Cat na indeksie 1.

Ósma i dziewiąta linijka to potwierdzenie działania całego mechanizmu w postaci wydobycia i wyświetlenia obiektów znajdujących się w kontenerze na indeksach 0 i 1. Co zobaczymy w konsoli IDE po uruchomieniu programu?

![Blog image](/programming/utils/javagenericsenum-11.png)

Czyli wszystko działa tak jak należy!

**Uwaga!** Gdybyśmy parametryzowali klasę Container typem Cat, wówczas powyższa implementacja nie byłaby prawidłowa. Do metody add() oraz get() jako pierwszy argument moglibyśmy wstawić jedynie obiekt klasy Cat.

## Ciekawostka

Możemy także parametryzować klasę typem, który implementuje określony interfejs. Robimy to również słowem extends, a nie jakby mogło się wydawać implements.

![Blog image](/programming/utils/javagenericsenum-12.png)

![Blog image](/programming/utils/javagenericsenum-13.png)

![Blog image](/programming/utils/javagenericsenum-14.png)

Klasy Dog, Cat oraz Main pozostały bez zmian. Po naniesieniu takich zmian wszystko nadal działa.

## Konwencje nazewnicze

Parametry generyczne nazywamy zgodnie z przyjętą konwencją nazewniczą:

- **T -> Type** (ogólnie klasy lub interfejsy)
- **K -> Key** (klucze w kolekcjach typu Map)
- **N -> Number** (klasy liczbowe np. Integer lub Double)
- **E -> Element** (typy, które reprezentują elementy)
- **V -> Value** (wartości w kolekcjach typu Map)
- **S, U, V -> Drugi, trzeci i kolejne** typy po T

## Typy wylicznikowe (enums)

Typy wylicznikowe to po prostu typy, które definiują zbiór stałych. Przydają się, gdy zmiennej może być nadana wartość z ograniczonego zestawu i do ograniczenia błędów powodowanych przez nieprawidłowo przekazane wartości. Poniżej prosty przykład pokazujący jak zdefiniować i użyć takiego typu.

![Blog image](/programming/utils/javagenericsenum-15.png)

Zdefiniowano klasę typu wylicznikowego Day, a w niej zbiór stałych, z których każda reprezentuje dzień tygodnia. W metodzie main utworzono zmienną typu Day i przypisano do niej stałą MONDAY. Metoda System.out.println() wyświetli w konsoli tekst: Todaj is: MONDAY.

Możemy iść o krok dalej i przypisać każdemu dniu tygodnia numer, który reprezentuje jego pozycję w tygodniu, gdzie poniedziałek ma numer 1, wtorek numer 2 itd.

![Blog image](/programming/utils/javagenericsenum-16.png)

![Blog image](/programming/utils/javagenericsenum-17.png)

Jak widać, w tym przypadku musimy napisać większą implementację takiej klasy wylicznikowej. Trzeba dodać do każdego dnia tygodnia pole numeryczne oraz konstruktor, który będzie ustawiał tę wartość podczas tworzenia stałych enuma w innej klasie. Dodałem także metodę getPositionInWeek() która zwróci numer dnia w tygodniu. Na drugim obrazku widzimy metodę main, w której zrobimy małe testy. Po uruchomieniu takiego programu w konsoli widzimy:

![Blog image](/programming/utils/javagenericsenum-18.png)

Pokaże jeszcze jeden przykład zastosowania enumów dla dociekliwych. W świecie programowania, komunikacja między aplikacjami często odbywa się za pomocą protokołu HTTP. Kiedy nasza aplikacja wysyła żądanie do serwera, oczekuje na odpowiedź, która zawiera kod stanu HTTP, informujący nas o wyniku żądania. Możemy utworzyć enum, który zawiera wybrane kody odpowiedzi HTTP, wraz z ich opisami.

![Blog image](/programming/utils/javagenericsenum-19.png)

![Blog image](/programming/utils/javagenericsenum-20.png)

Powyższy przykład pokazuje przede wszystkim, że stałe zdefiniowane w enumie mogą przechowywać więcej niż jedno pole, a na dodatek pola te mogą być różnych typów. Stałe w naszej klasie HttpStatus przechowują pole numeryczne i pole typu String. Po uruchomieniu takiego programu w konsoli widzimy:

![Blog image](/programming/utils/javagenericsenum-21.png)

## Podsumowanie

W tym artykule omówiłem typy generyczne i wylicznikowe, czyli kolejne ważne z perspektywy każdego programisty narzędzia. Przede wszystkim dają nam one możliwość pisania czytelniejszego, bezpiecznego oraz podatnego w mniejszym stopniu na błędy kodu.

Jak zwykle, zalecam zgłębić oba tematy i przećwiczyć je sobie. Stosując zarówno enumy jak i generyki jesteśmy w stanie wynieść nasze projekty na wyższy poziom!