---
title: 'Interfejsy i Lambdy w Javie'
date: "11-04-2024"
categories:
    - Programming
    - Java
---

# Interfejsy i Lambdy w Javie

![Blog image](/programming/programming-interfaces-lambdas-java.png)

Ostatnio dodałem [artykuł](http://wiktorchudy.me/klasy-w-javie), w którym poruszałem temat różnych rodzajów klas w Javie. Teraz nadszedł więc czas na opisanie interfejsów, które na pierwszy rzut oka są trochę podobne do klas abstrakcyjnych. W artykule tym przedstawię czym są interfejsy, do czego ich używamy, porównam jak wyglądały przed Javą w wersji 8, i po niej, porównam interfejsy do klas abstrakcyjnych oraz poruszę temat wyrażeń lambda. Zapraszam do lektury!

## Czym są interfejsy?

Wyobraź sobie myszkę, klawiaturę, drukarkę lub pendrive'a. W dzisiejszych czasach wszystkie te urządzenia peryferyjne korzystają z interfejsu USB. Zastanawiając się chwilę można dojść do wniosku, że urządzeń, które go implementują jest o wiele więcej. Możemy więc dostrzec, jak dużą elastyczność dają nam takie interfejsy jak USB. Poprzez jego wykorzystanie, możemy zdefiniować wspólne zachowanie dla różnych klas urządzeń, co pozwala na spójne zarządzanie oraz podłączenie ich do każdego komputera. Teraz spójrz na praktyczny przykład z kodu:

![Blog image](/programming/utils/intlamjava-1.png)

Na powyższym obrazku widzimy zdefiniowany interfejs USB. Interfejs ten definiuje wspólne metody obsługi dla wszystkich urządzeń USB pozwalające na połączenie, rozłączenie, odczyt oraz zapis danych. Możemy z pomocą takiego interfejsu obsłużyć myszki, klawiatury, drukarki i inne urządzenia. Spójrz teraz na poniższy przykład implementacji interfejsu USB.

![Blog image](/programming/utils/intlamjava-2.png)

Klasa Mouse implementuje interfejs USB. Oznacza to, że trzeba w niej dodać własną implementację dla wszystkich metod z tego interfejsu. I tak samo byłoby w przypadku klas Keyboard czy Printer, jeśli implementowałyby interfejs USB. Dla każdej z nich musielibyśmy dodać własną, konkretną dla danego urządzenia implementację metody connect(), disconnect(), sendData() oraz receiveData().

## Cechy interfejsów

- W Javie interfejsy deklarujemy słowem interface.
- Interfejsy implementujemy słowem kluczowym implements.
- Interfejsy nie mogą być poprzedzone modyfikatorami private i protected. Mogą być jedynie publiczne i pakietowe.
- Klasy mogą dziedziczyć co najwyżej po jednej klasie, ale mogą implementować dowolnie wiele interfejsów.
- Interfejsy mogą dziedziczyć po innych interfejsach, ale nie mogą implementować innych interfejsów.
- Interfejsy mogą dziedziczyć dowolnie wiele interfejsów.

## Porównanie interfejsów przed i po Java 8

### Przed Java 8

- Nie można deklarować **zmiennych**.
- **Brak implementacji metod**. Interfejsy przed Java 8 mogły zawierać jedynie deklaracje metod, ale bez żadnej implementacji (tylko metody abstrakcyjne). Oznaczało to, że klasy implementujące interfejs przed Java 8 musiały dostarczać własne implementacje dla wszystkich metod zdefiniowanych w interfejsie.
- **Brak metod domyślnych i statycznych**. Interfejsy nie mogły zawierać metod z domyślną implementacją ani metod statycznych.
- **Brak interfejsów funkcyjnych**. Interfejsy nie mogły służyć jako interfejsy funkcyjne, czyli interfejsy posiadające jedną jedyną abstrakcyjną metodę.
- Brak wyrażeń **lambda**.

### Po Java 8

- **Możliwość deklarowania zmiennych**. Zmienne zdefiniowane w interfejsie są domyślnie: public, static, final.
- **Metody z implementacją**. Interfejsy po Java 8 mogą zawierać metody z domyślną implementacją. Dzięki temu klasy implementujące go nie muszą definiować własnego ciała tej metody.
- **Metody domyślne i statyczne**. W Java 8 dodano możliwość definiowania metod z domyślną implementacją, co daje większą elastyczność. Dodano także metody statyczne pozwalające na umieszczanie w interfejsach kodu, który jest niezależny od instancji obiektu.
- **Interfejsy funkcyjne**. Po Java 8 interfejsy mogą służyć jako interfejsy funkcyjne, czyli takie które mają jedną metodę abstrakcyjną. Ułatwia to pracę z wyrażeniami lambda.
- **Wyrażenia lambda**.

## Interfejs vs. Klasa abstrakcyjna

### Interfejs

- Tylko zmienne stałe, statyczne i publiczne.
- Nie może posiadać konstruktorów.
- Nie może posiadać metod ze słowem final.
- Może dziedziczyć po wielu interfejsach i nie może implementować żadnego interfejsu.
- Służy często jako specyfikacja (zestaw metod), która jest implementowana przez powiązane klasy.

### Klasa abstrakcyjna

- Zmienne stałe, niestałe, statyczne, niestatyczne oraz z wszystkimi modyfikatorami dostępu.
- Może posiadać konstruktory.
- Może posiadać metody ze słowem final.
- Może dziedziczyć po jednej klasie i implementować wiele interfejsów.
- Służy często jako klasa bazowa, która jest rozszerzana przez inne, powiązane klasy.

## Kiedy użyć interfejsów, a kiedy klas abstrakcyjnych?

### Użyj interfejsu gdy

- chcesz osiągnąć polimorfizm, co pozwoli na traktowanie różnych klas zgodnie z jednym interfejsem.
- chcesz, aby różne klasy implementowały ten sam zestaw metod, ale mogły to zrobić w różny sposób.
- planujesz użyć "wielokrotnego dziedziczenia", ponieważ Java nie obsługuje wielokrotnego dziedziczenia klas, ale umożliwia wielokrotną implementację interfejsów.

### Użyj klasy abstrakcyjnej gdy

- chcesz dostarczyć częściową implementację, która będzie wspólna dla wielu klas, które będą po niej dziedziczyć.
- potrzebujesz stworzyć wspólną strukturę dla wielu podklas (wzorzec), ale jednocześnie chcesz, aby niektóre metody były implementowane w innych klasach wedle potrzeb danej klasy.
- dopuszczalne jest, aby klasa miała metody abstrakcyjne (bez implementacji) i metody konkretnie zaimplementowane.
- nie potrzebujesz elastyczności w dziedziczeniu i wielokrotnego dziedziczenia.

## Wyrażenia lambda

**Wyrażenia lambda** w Javie to w rzeczywistości funkcje anonimowe (bez nazwy), które mogą być przypisane do zmiennych lub przekazywane jako argumenty do metod. Definicja takiej funkcji składa się z listy parametrów, strzałki i ciała funkcji:

### ( parametry ) -> { ciało_funkcji }

Wyrażenia lambda mają szerokie zastosowanie. Można je spotkać chociażby wewnątrz streamów wykorzystywanych do operacji na kolekcjach czy w wątkach. Ale z racji tego, że jest to artykuł poświęcony interfejsom, to skupię się tutaj na ich głównym zastosowaniu, czyli **interfejsach funkcyjnych**. Interfejsy funkcyjne to takie, które zawierają dokładnie jeden nagłówek niezaimplementowanej metody.

![Blog image](/programming/utils/intlamjava-3.png)

![Blog image](/programming/utils/intlamjava-4.png)

![Blog image](/programming/utils/intlamjava-5.png)

Możliwe są także dalsze skrócenia wyrażeń lambda za pomocą metod referencyjnych. Metody referencyjne pozwalają na zdefiniowanie wyrażenia lambda w bardziej zwięzły sposób.

![Blog image](/programming/utils/intlamjava-6.png)

![Blog image](/programming/utils/intlamjava-7.png)

W powyższym przykładzie metoda referencyjna System.out::println jest skrótem dla wywołania System.out.println(name), czyli jest równoważna funkcji (name) -> {System.out.println(name)}.

## Podsumowanie

W tym artykule omówiłem sporo ważnego materiału. Przedstawiłem podstawowe narzędzie osiągania polimorfizmu, którym są interfejsy, pokazałem, do czego ich używamy, porównałem jak wyglądały przed Javą w wersji 8, i po niej. Następnie zestawiłem interfejsy z klasami abstrakcyjnymi oraz poruszyłem temat wyrażeń lambda.

Jak zwykle polecam przećwiczyć sobie omówione w tym artykule koncepty i bardzo dobrze się ich nauczyć. Są to bardzo przydatne narzędzia, bez których nie jest możliwe efektywne stworzenie większego projektu.