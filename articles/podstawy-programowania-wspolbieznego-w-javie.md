---
title: 'Podstawy programowania współbieżnego w Javie'
date: "09-05-2024"
categories:
    - Programming
    - Java
---

# Podstawy programowania współbieżnego w Javie

![Blog image](/programming/programming-podstawy-wspolbieznego.png)

W dzisiejszym artykule zajmę się omówieniem podstaw programowania współbieżnego w języku Java. Temat jest na tyle szeroki, że można z niego zrobić całą serię artykułów, z tego względu w tym poruszę tylko podstawowe koncepty.

Programowanie współbieżne to paradygmat, który zakłada, że program może składać się z wielu równoległych i współbieżnych wątków. Program jest współbieżny, jeśli jego wykonanie wiąże się z więcej niż jednym jednocześnie działającym przepływem sterowania, czyli wykonywaniem instrukcji przez odrębne wątki. W programowaniu współbieżnym istotne jest zarządzanie współdzielonymi zasobami i synchronizacja działań wątków w celu uniknięcia problemów związanych z wyścigami czy blokadami.

## Tworzenie wątku

### Rozszerzenie klasy Thread

![Blog image](/programming/utils/javapodswspo-1.png)

![Blog image](/programming/utils/javapodswspo-2.png)

![Blog image](/programming/utils/javapodswspo-3.png)

### Implementacja interfejsu Runnable

![Blog image](/programming/utils/javapodswspo-4.png)

![Blog image](/programming/utils/javapodswspo-5.png)

![Blog image](/programming/utils/javapodswspo-6.png)

Na pierwszy rzut oka, porównując oba sposoby, niczym się nie różnią. Nawet efekty są identyczne. Jedyne różnice, to że w pierwszym przypadku w sygnaturze klasy mamy słowo klucze extends, a w drugim implements. A no, i jeszcze sposób odpalenia wątków. Jakie są więc główne różnice?

#### extends Thread

- Narzuca ograniczenie, ponieważ klasa może dziedziczyć tylko po jednej klasie. Rozszerzając klasę Thread nie możemy rozszerzyć żadnej innej klasy.
- Polega na nadpisaniu metody run().
- Do uruchomienia wątku nie są konieczne dodatkowe klasy ani interfejsy. Można wywołać metodę start() bezpośrednio na obiekcie klasy rozszerzającej klasę Thread.

#### implements Runnable

- Pozwala na większą elastyczność i lepsze zarządzanie dziedziczeniem, ponieważ klasa może implementować wiele interfejsów.
- Polega na zaimplementowaniu metody run().
- Do uruchomienia wątku konieczne jest przekazanie instancji klasy implementującej Runnable do konstruktora klasy Thread.

## Synchronizacja wątków

Gdy dwa lub więcej wątków próbuje modyfikować ten sam zasób bez synchronizacji, może wystąpić tzw. wyścig, który prowadzi do nieprzewidywalnego zachowania programu. Program współbieżny musi zapewnić wykluczanie jednoczesnego dostępu do wspólnego zasobu dowolnej pary wątków korzystających z tego zasobu. Zaniedbanie tego wymagania może spowodować problemy, między innymi doprowadzenie do stanu nieokreślonego danego zasobu.

Rozwiązaniem problemu jest poprawne zastosowanie słowa kluczowego **synchronized**. Można używać go do synchronizowania metody lub bloku kodu.

### Synchronizowanie metody za pomocą słowa kluczowego synchronized

Zastosowanie słowa kluczowego **synchronized** w sygnaturze metody zapewnia, że tylko jeden wątek może ją wykonywać jednocześnie.

![Blog image](/programming/utils/javapodswspo-7.png)

![Blog image](/programming/utils/javapodswspo-8.png)

![Blog image](/programming/utils/javapodswspo-9.png)

####  Counter

Klasa posiadająca pole count, które będzie modyfikowane przez dwa wątki jednocześnie oraz metody increment(), która jest synchronizowana do inkrementacji pola i getCount() do uzyskania wartości pola.

#### MyThread
Klasa rozszerzająca klasę Thread. Posiada pole counter, inicjowane w konstruktorze, który przyjmuje obiekt klasy Counter jako argument. Nadpisuje metodę run(), dostarczając pętlę, która inkrementuje pole count 10000 razy.

#### Main

Posiada metodę main z słowem kluczowym throws, które sygnalizuje, że metoda może zgłosić wyjątek **InterruptedException**. Posiada także obiekt klasy Counter oraz dwa wątki - myThread1 i myThread2, które przyjęły w swoich konstruktorach obiekt klasy counter jako argument. Następuje uruchomienie obu wątków oraz zastosowanie na nich metody join(). Czym jest ta metoda? Krótko mówiąc, pozwala na oczekiwanie na zakończenie działania wątku, na którym została wykonana, zanim wykona się kod znajdujący się po wywołaniu tej metody. W tym konkretnym przypadku metoda ta umożliwia wyświetlenie wartości pola count dopiero po wykonaniu obu wątków. Jeszcze jedno - metoda ta może rzucać wyjątek **InterruptedException**, stąd w sygnaturze metody znalazła się odpowiednia deklaracja. Można oczywiście obsłużyć ten wyjątek według uznania za pomocą bloku try-catch.

Jaki będzie efekt działania programu? Dzięki użyciu słowa **synchronized** będzie poprawny, czyli wartość pola count będzie 20000. Gdybyśmy nie zastosowali tego słowa na metodzie increment(), to niekiedy dwa wątki jednocześnie mogłyby ją wykonać, co doprowadziłoby do nieoczekiwanej sytuacji i wynik mógłby odbiegać od poprawnego.

### Synchronizowanie bloku kodu za pomocą słowa kluczowego synchronized

Zastosowanie słowa kluczowego **synchronized** dla bloku kodu zapewni, że tylko jeden wątek będzie mógł wykonać ten blok jednocześnie.

![Blog image](/programming/utils/javapodswspo-10.png)

![Blog image](/programming/utils/javapodswspo-11.png)

![Blog image](/programming/utils/javapodswspo-12.png)

Powyższy program jest niemal identyczny jak wcześniejszy i działa na tej samej zasadzie, jednak zamiast użycia słowa kluczowego **synchronized** w sygnaturze metody increment, używam go do złapania w blok kodu, który ma być synchronizowany, czyli kodu metody increment.

Dlaczego użyłem słowa kluczowego **this** pomiędzy nawiasami? Jest to bardzo ważna część synchronizowania bloku kodu. Pomiędzy nawiasami określa się obiekt, który działa jako blokada, kontrolując dostęp wielu wątków do krytycznej sekcji kodu (kodu umieszczonego w bloku **synchronized**). Działa to trochę jak klucz do drzwi. Jeśli ktoś (wątek) ma klucz do drzwi, może wejść do środka (do bloku kodu oznaczonego jako synchronized), natomiast jeśli, ktoś inny próbuje wejść ale nie ma klucza, to musi poczekać na swoją kolej.

Zazwyczaj jako taki obiekt blokady podaje się obiekt klasy Object nazwany jako **lock**, jednak może to być dowolny inny obiekt.

![Blog image](/programming/utils/javapodswspo-13.png)

## ExecutorService

**Concurrency API** (zestaw narzędzi i bibliotek do obsługi wielowątkowości) umożliwia wysokopoziomową pracę z wątkami za pomocą interfejsu **ExecutorService**. Dzięki temu zadania mogą być tworzone, uruchamiane i zarządzane asynchronicznie bez potrzeby tworzenia wątków. Zamiast ręcznego zarządzania wątkami można po prostu przekazać zadania do **ExecutorService**, który podejmie decyzję, które wątki je wykonają i jak będą zarządzane.

![Blog image](/programming/utils/javapodswspo-14.png)

![Blog image](/programming/utils/javapodswspo-15.png)

Powyższy kod tworzy najpierw za pomocą **Executors.newSingleThreadExecutor()** obiekt ExecutorService. Przez użycie metody **newSingleThreadExecutor()** wszystkie zadania wysłane w przyszłości do ExecutorService będą wykonywane sekwencyjnie przez pojedynczy wątek w kolejności, w jakiej zostały wysłane. Można zwiększyć liczbę wątków tworząc obiekt ExecutorService np. za pomocą metody **Executors.newFixedThreadPool(2)**, gdzie 2 oznacza dwa wątki.

Stworzyłem także dwa zadania, które po prostu printują liczby od 1 do 50 (pierwsze od 1 do 20, drugie od 21 do 50).

Zadania wysyła się do executora wywołując na nim metodę submit() i podając jako argument zadanie. Metoda **shutdown()** służy do zatrzymania przyjmowania nowych zadań i zakończenia działania puli wątków po zakończeniu wszystkich zadań, które zostały przesłane do wykonania.

## Wirtualne wątki

Stosunkowo niedawno, bo w Java 19 pojawiły się wątki wirtualne. Były one wtedy określane jako game-changer jeśli chodzi o wielowątkowość w Javie. Dlaczego? Wątek wirtualny (Virtual Thread) w Javie to lekki, zarządzany przez JVM wątek, który w porównaniu z tradycyjnym wątkiem, efektywniej wykorzystuje zasoby systemowe, umożliwiając skalowalną i wydajną obsługę współbieżności w aplikacjach.

![Blog image](/programming/utils/javapodswspo-16.png)

## Podsumowanie

W tym artykule omówiłem bardzo podstawowe koncepty związane z programowaniem współbieżnym. Paradygmat ten jest jednak znacznie szerszy i kryje wiele tajemnic, które idealnie byłoby rozpisać na kilka artykułów, co z resztą w przyszłości planuje.

Dziękuję ci za zapoznanie się z artykułem i jak zwykle polecam przećwiczyć wszystko co zostało w nim zawarte.