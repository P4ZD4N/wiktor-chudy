---
title: 'Streamy w Javie'
date: '26-04-2024'
categories:
  - Programming
  - Java
---

# Streamy w Javie

![Blog image](/programming/programming-streamy-java.png)

Jakiś czas temu poruszyłem temat [lambd](http://wiktorchudy.me/interfejsy-i-lambdy-w-javie). W dzisiejszym artykule będą nam one bardzo potrzebne, ponieważ zajmiemy się strumieniami, czyli pewnym tworem programowania funkcyjnego zaimplementowanym w Javie, który sporo z nich korzysta. Dzięki streamom, wszystko to co masz do zrobienia, i co zazwyczaj robiłeś pętlami możesz wyrazić w krótszej, zwięźlejszej i bardziej eleganckiej formie. Jeśli chcesz ulepszyć swój kod to zapraszam do lektury!

## Czym są strumienie?

Na początek chciałbym omówić trochę nazewnictwo. Czasem spotkasz się także z nazwą **Stream API**. Nazwa ta odnosi się do całego zestawu klas i interfejsów, które składają się na streamy i umożliwiają wszystkie te operacje.

A czym tak właściwie są **strumienie (streamy)**? Zostały wprowadzone w Javie 8 dając programistom możliwość elastyczniejszego operowania na sekwencjach danych, między innymi na kolekcjach. Pozwalają one na wykonywanie operacji takich jak filtrowanie, mapowanie, sortowanie czy redukowanie danych. Szczególnie przydają się, gdy pracujemy z dużymi zbiorami danych, ponieważ potrafią efektywnie je przetwarzać.

**Ciekawostka:** streamy implementują wzorzec programistyczny Monada, koncepcję z programowania funkcyjnego, która przedstawia mechanizm powiązania metod w ten sposób, że rezultat jednej staje się wejściem drugiej.

## Cechy strumieni

- Strumienie są **deklaratywne**. Określamy w nich jasno to, co chcemy zrobić, a nie jak to zrobić krok po kroku. Prowadzi to do czytelniejszego i zwięźlejszego kodu.
- Strumienie **nie przechowują** elementów, na których działają.
- Operacje strumieniowe **nie modyfikują** swojego źródła.
- Składają się z operacji **pośrednich** i **terminalnych**. Operacje pośrednie manipulują strumieniem (np. filtrowanie, mapowanie, sortowanie), natomiast operacje terminalne kończą przetwarzanie strumienia (np. forEach, collect, reduce).
- Operacje na strumieniach są wykonywane "leniwie". Operacje terminalne uruchamiają przetwarzanie strumienia, ale operacje pośrednie są wykonywane tylko wtedy, gdy jest to konieczne do uzyskanie wyniku.

## Tworzenie strumieni

Czas na trochę przykładów z kodu. Zaczniemy od tworzenia strumieni, a następnie, w kolejnej sekcji omówię najważniejsze metody, które się na nich wykonuje. Streamy tworzy się:

### Na podstawie istniejących kolekcji lub zbioru danych - z wykorzystaniem metody of()

![Image](/programming/utils/javastream-1.png)

Tworzymy obiekt klasy Stream za pomocą statycznej metody of() wywołanej na nazwie klasy Stream. Jako argument metody podajemy dane odpowiedniego typu, na których stream ma operować. Na koniec przypisujemy utworzony obiekt do zmiennej typu `Stream<String>`. Na zmiennej **namesStream** można od teraz wykonywać operacje strumieniowe.

### Bez elementów - z wykorzystaniem metody empty().

![Image](/programming/utils/javastream-2.png)

Tworzymy obiekt klasy Stream za pomocą statycznej metody empty(). Po co tworzy się puste streamy i do czego została przewidziana taka funkcjonalność? Tak samo, jak czasami potrzebujesz utworzyć niezainicjowaną zmienną czy pusty obiekt w celu późniejszego wypełnienia danymi, tak tutaj jest podobnie. Możemy wypełnić taki stream w trakcie działania programu, zależnie od warunków.

### Produkując zestaw elementów - z wykorzystaniem metody generate().

![Image](/programming/utils/javastream-3.png)

W tym przykładzie mamy pokazane dwa przypadki. W pierwszym za pomocą statycznej metody generate() generuje nieskończoną ilość losowych liczb z przedziału [0,1), podając jako argument tej metody Math::random. W drugim jest podobnie, jednak na takim obiekcie dodatkowo wywołuję metodę limit() z argumentem 20. Oznacza to, że metoda generate() wygeneruje jedynie 20 losowych liczb.

### Produkując zestaw elementów - z wykorzystaniem metody iterate().

![Image](/programming/utils/javastream-4.png)

Tutaj również mamy pokazane dwa przypadki. Metoda iterate() działa ogólnie dość podobnie do generate(), ponieważ z jej metodą również produkujemy zestaw elementów. Pierwszy przypadek to wygenerowanie za pomocą statycznej metody iterate() nieskończonej ilości kolejnych liczb, począwszy od 0. W drugim robię to samo, jednak za pomocą metody limit() ograniczam generowanie liczb do 20 elementów. Zatem drugi stream operuje na liczbach z zakresu 0 - 19.

### Na jakiejś kolekcji - z wykorzystaniem metody stream().

![Image](/programming/utils/javastream-5.png)

Chyba najczęściej wykorzystywaną metodą na stworzenie streama jest po prostu wykonanie metody stream() na jakiejś kolekcji lub klasie pomocnicznej takiej jak Arrays czy Collections. Na powyższym przykładzie widzimy utworzenie streama z tablicy przechowującej Stringi oraz Listy przechowującej Integery.

## Najważniejsze metody

Na początek stworzę sobie za pomocą streamów pomocniczą listę integerów, na której będę pokazywał niektóre metody. Lista ta zostanie wypełniona liczbami z przedziału 1-100.

![Image](/programming/utils/javastream-6.png)

Ten początkowy przykład pokazuje utworzenie streama za pomocą wcześniej podanej metody iterate(), która dodaje do niego po kolei liczby począwszy od 1 aż do osiągnięcia limitu określonego w metodzie limit(). Na sam koniec używam na streamie metody toList(), która konwertuje streama do listy i przypisuje całość do zmiennej integers, która jest typu List<Integer>.

### stream()

Tak jak wcześniej było pokazane i opisane, jest to fundamentalna metoda, która tworzy streama. To od niej zaczyna się większość operacji strumieniowych.

### filter()

Metoda ta służy do filtrowania (wybierania) tylko tych elementów strumienia, które spełniają określone kryterium. Kryterium określamy w argumencie tej metody. Argumentem tej metody może być tylko obiekt typu Predicate, lub wyrażenie lambda z racji tego, że Predicate jest interfejsem funkcyjnym.

#### Wypisanie liczb podzielnych przez 3 i 5 za pomocą pętli foreach.

![Image](/programming/utils/javastream-7.png)

Z pewnością używałeś chociaż raz takiego podejścia do filtrowania danych z kolekcji. Jest to podejście imperatywne, które określa jakie kroki należy wykonać, aby uzyskać pożądany wynik.

### Metoda filter() z obiektem typu Predicate podanym jako argument.

![Image](/programming/utils/javastream-8.png)

Utworzyłem obiekt typu Predicate<Integer>, w którym nadpisałem metodę test. Na podstawie tej metody odbywa się nasze filtrowanie. Liczby, dla których zostanie zwrócone false zostaną odrzucone. W metodzie filter() podałem jako argument obiekt klasy Predicate, a następnie wykonałem metodę forEach() z wprowadzonym argumentem System.out::println, która wypisała do konsoli liczby spełniające warunek. Na konsoli pojawiły się liczby: 15, 30, 45, 60, 75, 90.

### Metoda filter() z lambdą w argumencie.

![Image](/programming/utils/javastream-9.png)

Wywołałem na strumieniu metodę filter(), w której jako argument podałem wyrażenie lambda. Ta lambda odnosi się do metody test(), która została nadpisana na poprzednim screenie z racji tego, że Predicate jest interfejsem funkcyjnym, posiadającym tylko tą metodę do własnej implementacji. Tak więc podając te same warunki otrzymam dokładnie ten sam wynik, czyli 15, 30, 45, 60, 75, 90.

### map()

Metoda ta służy do przekształcania każdego elementu strumienia zgodnie z określonymi wymaganiami, które są definiowane w argumencie tej metody. Argumentem tej metody może być tylko obiekt typu Function, lub wyrażenie lambda z racji tego, że Function jest interfejsem funkcyjnym.

#### Wypisanie wszystkich liczb pomnożonych przez 2 za pomocą pętli foreach.

![Image](/programming/utils/javastream-10.png)

Wypisanie wszystkich elementów listy w podejściu imperatywnym.

#### Metoda map() z obiektem typu Function podanym jako argument.

![Image](/programming/utils/javastream-11.png)

#### Metoda filter() z lambdą w argumencie.

Utworzyłem obiekt typu `Function<Integer, Integer>`, w którym nadpisałem metodę apply. Interfejs ten jest parametryzowany przeze mnie dwa razy typem Integer. Pierwszy typ oznacza jakiego typu obiekt jest przyjmowany przez metodę apply(), a drugi typ to typ obiektu zwracanego przez tą metodę.

Dostarczając do metody map() taki obiekt typu Function pomnożymy wszystkie elementy streama przez 2. Gdy wypiszemy elementy za pomocą forEach(System.out::println), to zobaczymy, że wszystkie liczby zostały pomnożone zgodnie z implementacją metody apply().

![Image](/programming/utils/javastream-12.png)

Wywołałem na strumieniu metodę map(), w której jako argument podałem wyrażenie lambda. Ta lambda odnosi się do metody apply(), która została nadpisana na poprzednim screenie z racji tego, że Function jest interfejsem funkcyjnym, posiadającym tylko tą metodę do własnej implementacji. Tak więc podając te same warunki otrzymam w konsoli wszystkie elementy streama pomnożone przez 2.

### forEach()

Metoda, której używałem już w tym artykule do wyświetlania wszystkich elementów. Jak sama nazwa wskazuje, forEach() to metoda, która wykonuje określone operacje na każdym elemencie strumienia. Jest to czytelniejsza i wygodniejsza w użyciu alternatywa dla pętli for i foreach.

![Image](/programming/utils/javastream-13.png)

![Image](/programming/utils/javastream-14.png)

Na powyższym przykładzie za pomocą metody forEach() wypisuje każdy owoc z listy z doklejoną kwestią "I like ". Wynik tego programu znajduje się na drugim screenie.

### collect()

Bardzo przydatna metoda, która po wykonaniu szeregu operacji na strumieniu zbiera wszystkie jego elementy do określonej kolekcji. Przyjmuje jako argument kolektor, który określa w jaki sposób elementy strumienia mają być zbierane.

![Image](/programming/utils/javastream-15.png)

Na początku filtruje listę integerów w celu pozostawienia w strumieniu tylko liczb parzystych. Następnie za pomocą metody collect() oraz zawartego w niej kolektora zbieram wszystkie te elementy do listy.

Później analogicznie wygląda to w przypadku seta. Tam filtruję liczby, aby pozostawić tylko nieparzyste a następnie za pomocą odpowiedniego kolektora zbieram je do seta.

Lista evenIntegers przechowuje liczby parzyste z przedziału [1;100], a Set oddIntegers liczby nieparzyste z tego samego przedziału.

### sorted()

Jak możesz się domyślić metoda ta służy do sortowania streama. Metoda bez argumentu będzie sortować elementy według naturalnego porządku, jednak można zdefiniować własny komparator lub wyrażenie lambda, które będzie sortować elementy według naszej wizji. W przykładzie zajmiemy się właśnie tym podejściem.

#### Metoda sorted() z obiektem typu Comparator podanym jako argument.

Utworzyłem obiekt typu Comparator<Integer>. Comparator to interfejs funkcyjny, który oferuje do własnej implementacji metodę compare(), za pomocą której będziemy porównywać elementy. Podany typ generyczny Integer odnosi się do typu obiektów, które będą porównywane. Moja implementacja metody compare() porównuje elementy w odwrotnym porządku do naturalnego, czyli od największego do najmniejszego.

Podałem jako argument metody sorted() obiekt typu Comparator posiadający implementację metody compare(). Następnie za pomocą kolektora zebrałem elementy posortowane malejąco do listy.

![Image](/programming/utils/javastream-16.png)

#### Metoda sorted() z lambdą w argumencie

Wywołałem na strumieniu metodę sorted(), w której jako argument podałem wyrażenie lambda. Ta lambda odnosi się do metody compare(), która została nadpisana na poprzednim screenie z racji tego, że Comparator jest interfejsem funkcyjnym, posiadającym tylko tą metodę do własnej implementacji. Tak więc podając te same warunki porównania, posortuje wszystkie elementy streama według swojej wizji (w tym przypadku malejąco). Następnie za pomocą kolektora zebrałem posortowane elementy do listy.

![Image](/programming/utils/javastream-17.png)

## Inne przydatne metody

Opisane szczegółowo przeze mnie metody strumieniowe to tylko garstka, patrząc na wszystkie dostępne w całym Stream API, jednak są to fundamentalne metody używane przy większości operacji. Strumienie to tak potężne narzędzie, że opisanie wszystkich metod z nimi związanych zajęłoby zbyt wiele czasu, jednak poniżej znajdziesz skrócony opis kolejnych przydatnych metod.

- **reduce()** - redukuje elementy strumienia do pojedynczej wartości przy użyciu określonej funkcji akumulatora. Przydatne w sytuacjach, kiedy chcesz wykonać operację, która redukuje wszystkie elementy strumienia do pojedynczej wartości np. sumowanie elementów, konkatenacja ciągów, znajdowanie maksymalnej wartości.
- **flatMap()** - transformuje każdy element strumienia w inny strumień i łączy je w jedno. Przydatne w sytuacjach, kiedy przykładowo mamy listę przechowującą listy integerów i potrzebujemy mieć wszystkie elementy z tych list spłaszczone do jednego strumienia.
- **disctinct()** - usuwa zduplikowane elementy ze strumienia.
- **skip()** - pomija określoną liczbę elementów z początku strumienia.
- **findFirst()** - znajduje pierwszy pożądany element w strumieniu. Przydatne w sytuacjach, gdy chcesz wyszukać pierwszy element w strumieniu, spełniający twoje kryteria. Przykładowo można połączyć z metodą filter(), która pozostawi same liczby parzyste, a ty znajdziesz pierwszą liczbę parzystą występującą w strumieniu.
- **findAny()** - znajduje dowolny pożądany element w strumieniu. Działa analogicznie do findFirst(), jednak zamiast pierwszego elementu zwraca dowolny.
- **anyMatch()** - sprawdza, czy dowolny element strumienia spełnia określony warunek. Przydatne w sytuacjach, jak chęć sprawdzenia czy którakolwiek liczba znajdująca się w strumieniu jest równa 0.
- **allMatch()** - sprawdza, czy wszystkie elementy strumienia spełniają określony warunek. Analogicznie do anyMatch(), jednak w odniesieniu do wszystkich elementów, a nie do któregokolwiek.
- **noneMatch()** - sprawdza, czy żaden element strumienia nie spełnia określonego warunku. Przydatne w sytuacjach, gdy chcemy przykładowo sprawdzić czy żaden ze stringów nie jest dłuższy niż 10 znaków.
- **count()** - zlicza liczbę elementów w strumieniu.
- **max()** - znajduje maksymalną wartość w strumieniu na podstawie podanego w argumencie komparatora.
- **min()** - znajduje miminalną wartość w strumieniu na podstawie podanego w argumencie komparatora.

## Podsumowanie

Przedstawiłem wszystko co najważniejsze związane ze strumieniami w Javie. Poruszyłem temat tego, czym są strumienie, jakie mają cechy, jakie są sposoby na ich tworzenie oraz pokazałem powiązane z nimi metody.

Strumienie to bardzo potężne narzędzie, które umożliwia wygodne i wydajne przetwarzanie danych. Korzystając z metod strumieniowych możemy pisać bardziej czytelny kod, który jest łatwiejszy w utrzymaniu i rozszerzaniu. Warto dobrze zrozumieć przedstawione tutaj podstawy strumieni oraz zacząć stosować je w swoich projektach.

🙏 **Zadanie ode mnie:** Z pewnością w swoich projektach używałeś pętli for/foreach do filtrowania danych. Zacznij od zastąpienia ich strumieniami. Najlepiej zrobić to z wykorzystaniem metody filter(). Później idź dalej i zacznij robić ze strumieniami bardziej zaawansowane operacje. Powodzenia!
