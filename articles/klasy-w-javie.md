---
title: 'Klasy w Javie'
date: '03-04-2024'
categories:
  - Programming
  - Java
---

# Klasy w Javie

![Blog image](/programming/programming-classes-java.png)

Java to język obiektowy. Oznacza to, że każdy kod napisany w tym języku musi znajdować się w jakiejś klasie, co jest też jedną z cech charakterystycznych tego języka. W przeciwieństwie do Pythona, JavaScripta czy PHP, gdzie kod może istnieć poza klasami, w Javie wszystko musi być zorganizowane w ramach klas.

Z tego powodu w Javie można znaleźć sporo różnych rodzajów klas. Najważniejsze z nich zostaną omówione w załączonym artykule. Dobrze jest być świadomym wielu rodzajów klas i mieć wiedzę z tego zakresu, tak więc zapraszam do lektury!

## Klasa zewnętrzna (Outer class)

Klasa zewnętrzna w Javie to po prostu klasa, która nie jest zawarta w żadnej innej klasie. Takie klasy są używane we wszystkich projektach, z tego powodu, że każdy napisany kod musi znajdować się w jakiejś klasie, więc nieuniknione jest jej użycie.

### Cechy

- Są deklarowane poza innymi klasami, zazwyczaj na poziomie pakietu.
- Są dostępne z innych pakietów, jeśli są zadeklarowane jako publiczne.
- Mogą być tylko publiczne lub pakietowe.

### Przykłady

![Blog image](/programming/utils/classjava-1.png)

![Blog image](/programming/utils/classjava-2.png)

## Klasa wewnętrzna niestatyczna (Nested Inner Class)

Klasa wewnętrzna niestatyczna to klasa zawarta w innej klasie, która jest zadeklarowana bez specyfikatora static i zdefiniowana w miejscu, w którym mogłyby wystąpić składniki klasy zawierającej.

### Cechy

- Mają dostęp do wszystkich modyfikatorów dostępu (public, private, protected) oraz mogą być pakietowe.
- Mają dostęp do wszystkich pól i metod klasy otaczającej, nawet jeśli pola i metody te są ustawione na prywatne.
- Nie możemy stworzyć obiektu klasy wewnętrznej bez stworzenia obiektu klasy, która ją otacza.
- Przed Java 16 nie można było deklarować w klasach wewnętrznych pól, metod, ani klas statycznych oraz interfejsów. Od Javy 16 jest już to możliwe.

### Przykłady

![Blog image](/programming/utils/classjava-3.png)

![Blog image](/programming/utils/classjava-4.png)

## Klasa wewnętrzna statyczna, znana także jako klasa zanurzona (Static Nested Class)

Klasa wewnętrzna statyczna jest czasem nazywana klasą zanurzoną. To klasa zawarta w innej klasie, która jest zadeklarowana ze specyfikatorem static i zdefiniowana w miejscu, w którym mogłyby wystąpić składniki klasy zawierającej.

### Cechy

- W przeciwieństwie do klasy wewnętrznej niestatycznej, klasa zanurzona nie jest powiązana z instancją klasy, która ją otacza. Można tworzyć zatem obiekty klasy zanurzonej bez konieczności posiadania instancji klasy otaczającej.
- Klasy te mają dostęp do wszystkich pól i metod klasy otaczającej (nawet tych, które sa prywatne) ale tylko wtedy, gdy pola i metody te są statyczne.
- Mają dostęp do wszystkich modyfikatorów dostępu (public, private, protected) oraz mogą być pakietowe.
- Mogą zawierać tylko składniki statyczne.
- Nie mają dostępu do intancji klasy otaczającej.

### Przykłady

![Blog image](/programming/utils/classjava-5.png)

![Blog image](/programming/utils/classjava-6.png)

## Klasa lokalna (Method Local Inner Class)

Klasa lokalna to klasa zawarta w ciele metody.

### Cechy

- Nie może być zadeklarowana ze specyfikatorem hermetyzacji (public, private, protected) ani static.
- Ma dostęp do zmiennych lokalnych wewnątrz metody, w której jest zdefiniowana.
- Może być używana tylko wewnątrz metody, w której została zdefiniowana.

### Przykłady

![Blog image](/programming/utils/classjava-7.png)

![Blog image](/programming/utils/classjava-8.png)

![Blog image](/programming/utils/classjava-9.png)

## Klasa anonimowa (Anonymous Inner Class)

Klasa anonimowa to klasa niejawnie zdefiniowana tuż za fabrykatorem. Jest tworzona bezpośrednio w miejscu, gdzie jest potrzebna.

### Cechy

- Klasa taka nie ma nazwy.
- Nie można tworzyć instancji klasy anonimowej.
- Definicja klasy anonimowej nie zawiera słowa kluczowego class ani fraz extends i implements.
- Mogą rozszerzać tylko jedną, niefinalną klasę lub implementować tylko jeden interfejs poprzez bezpośrednie zaimplementowanie metod interfejsu lub nadpisanie metod klasy bazowej w jej definicji.

### Przykłady

![Blog image](/programming/utils/classjava-10.png)

![Blog image](/programming/utils/classjava-11.png)

## Klasa finalna (Final Class)

Klasa finalna to klasa (jak można się domyślić po słowie kluczowym final), która nie może być dziedziczona przez inne klasy. W jej definicji należy zawrzeć słowo kluczowe final.

### Cechy

- Nie może być dziedziczona przez inne klasy.
- Zapewnia integralność i niezmienność implementacji.
- Może być klasą wewnętrzną.
- Ma dostęp do wszystkich modyfikatorów dostępu (public, private, protected) oraz mogą być pakietowe.

### Przykłady

![Blog image](/programming/utils/classjava-12.png)

![Blog image](/programming/utils/classjava-13.png)

## Klasa abstrakcyjna (Abstract Class)

Klasa abstrakcyjna to klasa, która w swojej definicji zawiera słowo kluczowe abstract. Służy często jako szablon lub klasa bazowa dla innych klas.

### Cechy

- Nie można utworzyć obiektu klasy abstrakcyjnej.
- Są wykorzystywane do definiowania ogólnej struktury oraz częściowej implementacji, pozostawiając niektóre implementacje dla klas pochodnych.
- Może, ale nie musi zawierać metod abstrakcyjnych (ze słowem kluczowym abstract). Takie metody są bez ciała, czyli bez implementacji. Klasy dziedziczące po klasie abstrakcyjnej muszą dostarczyć swoją implementację dla wszystkich metod abstrakcyjnych w niej zdefiniowanych. Warto wspomnieć, że gdy klasa zawiera metodę abstrakcyjną to musi być abstrakcyjna.
- Może zawierać pola tak jak w przypadku zwykłych klas.
- Może dziedziczyć po innych klasach abstrakcyjnych lub zwykłych klasach.
- Może implementować interfejsy.
- Ma dostęp do wszystkich modyfikatorów dostępu (public, private, protected) oraz mogą być pakietowe.

### Przykłady

![Blog image](/programming/utils/classjava-14.png)

![Blog image](/programming/utils/classjava-15.png)

## Podsumowanie

Z tego artykułu dowiedziałeś się, jakie różnorodne klasy istnieją w Javie. Warto mieć świadomośc, że klasy zewnętrzne to nie wszystko. Trzeba wiedzieć także o tym, że istnieją inne, bardzo użyteczne rodzaje, które pozwalają na skuteczniejsze rozwiązanie niektórych problemów.

Mam nadzieję, że artykuł okazał się dla Ciebie użyteczny, oraz że wyciągnąłeś z niego wiele pożytecznych informacji. Już teraz zachęcam Cię do eksploracji tematu klas i przećwiczenia sobie tych konceptów. Z pewnością kiedyś spotkasz się z którymś z wyżej wymienionych rodzajów klas. Wtedy nie będą Ci one już straszne 😎
