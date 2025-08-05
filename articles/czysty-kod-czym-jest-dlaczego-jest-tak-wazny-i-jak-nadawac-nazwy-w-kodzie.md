---
title: 'Czysty kod - czym jest, dlaczego jest tak ważny i jak nadawać nazwy w kodzie?'
date: "25-03-2024"
categories:
    - Programming
---

# Czysty kod - czym jest, dlaczego jest tak ważny i jak nadawać nazwy w kodzie?

![Blog image](/programming/programming-clean-code-what-is.png)

Witam! Z racji tego, że jakiś czas temu ukończyłem kurs "Clean Code" pragnę podzielić się tutaj wiedzą, którą z niego wyciągnąłem. W pierwszym wpisie z serii czystego kodu poruszę temat tego czym w ogóle on jest, dlaczego jest tak ważny oraz przedstawię, w jaki sposób nazywać "rzeczy" w kodzie. Wszystko będzie poparte przykładami, które udowodnią ogromną wartość czystego kodu 😉

## Czym jest czysty kod?

Czysty kod to czytelny, zorganizowany i zrozumiały kod źródłowy, który jest łatwy do utrzymania, rozbudowy i współpracy. Jest to umiejętność uniwersalna i niezależna od żadnej konkretnej technologii. Gdy nauczymy się pisać czysty kod, to będziemy już taki pisać w Javie, JavaScripcie, Pythonie i każdym innym języku programowania.

## Dlaczego czysty kod jest tak ważny?

- Umożliwia stworzenie **łatwego** do zrozumienia, utrzymania i rozszerzenia kodu, który będzie **czytelny** i **przystępny** dla innych oraz dla nas samych.
- Przyczynia się do **poprawy komunikacji** oraz **ułatwienia współpracy** w zespole programistycznym.
- Sprawi, że napisany przez nas kod będą po części **rozumieć** osoby niezwiązane z technologią.
- **Ułatwi** nam powrót do kodu po czasie (gdy w przyszłości wymyślimy jakąś nową funkcjonalność dla naszej aplikacji czy zwyczajnie będziemy chcieli zrefaktoryzować kod, to znacznie łatwiej będzie nam się za to zabrać). 
- Zmniejszy ryzyko **błędów i nieporozumień**.
- Zwiększy wydajność zespołu i oszczędność czasu za pomocą **wyeliminowania** zbędnych analiz niejasnego kodu.

## Dlaczego nazewnictwo ma tak duże znaczenie?

Pierwsza i najważniejsza zasada czystego kodu. Dlaczego nazewnictwo w ogóle ma znaczenie? Oczywiście dlatego, że dobrze nazwane pola, metody i klasy pozwalają osobie analizującej kod na zrozumienie go bez dogłębnej analizy jego szczegółów. Nazwy powinny być znaczące i jak najbardziej opisowe! Rozważ taki przykład:

![Blog image](/programming/utils/ccwhatis-1.png)

![Blog image](/programming/utils/ccwhatis-2.png)

Z pewnością zgodzisz się, że kod z pierwszego obrazka nie jest zbyt znaczący ani opisowy. Teoretycznie mogłoby być jeszcze gorzej, ponieważ sporo osób zaczynających programować nazywa rzeczy w kodzie jedną literą lub kombinacją litery i cyfry. Napewno trzeba się strzec takiego podejścia! Kod pokazany na drugim obrazku z kolei jest czysty i znaczący. Zawiera opisowe nazwy zmiennych, metod oraz klas. I tak w skrócie powinny wyglądać dobre nazwy!

## Jak nazywać pola w kodzie?

- Pisz wszystkie **nazwy po angielsku**. Kod piszemy tylko po angielsku.
- Stosuj **zrozumiałe** i **opisowe** nazwy tak, aby nazwa pola jednoznacznie opisywała jego zawartość. Unikaj skrótów, skrótowców oraz wyrażeń slangowych, które mogą być niejasne dla innych programistów.

![Blog image](/programming/utils/ccwhatis-3.png)

![Blog image](/programming/utils/ccwhatis-4.png)

![Blog image](/programming/utils/ccwhatis-5.png)

- Używaj **konwencji** nazw odpowiedniej dla twojego języka programowania. Przykładowo dla Javy będzie to camelCase, a dla Pythona snake_case. Zorientuj się jakiej konwencji używa się pisząc w twoim języku.
- Unikaj **zbyt długich nazw**. Choć nazwy powinny być jak najbardziej opisowe, to nadmiarowa ilość informacji w nich zawarta może sprawić, że kod będzie trudniejszy do przeczytania. Idealna nazwa to taka, która jest zwięzła i opisowa.

![Blog image](/programming/utils/ccwhatis-6.png)

- Gdy zmienna przechowuje wartość typu boolean, to jej nazwa powinna być **pytająca**.

![Blog image](/programming/utils/ccwhatis-7.png)

![Blog image](/programming/utils/ccwhatis-8.png)

![Blog image](/programming/utils/ccwhatis-9.png)

## Jak nazywać metody i funkcje w kodzie?

- Podobnie jak nazwy pól, pisz wszystkie nazwy metod po **angielsku**.
- Stosuj **zrozumiałe** i **opisowe** nazwy tak, aby nazwa metody jednoznacznie opisywała jej działanie. Unikaj skrótów, nazw, które nie opisują działania metody i mylących nazw, wprowadzających w błąd.

![Blog image](/programming/utils/ccwhatis-10.png)

![Blog image](/programming/utils/ccwhatis-11.png)

![Blog image](/programming/utils/ccwhatis-12.png)

![Blog image](/programming/utils/ccwhatis-13.png)

- Używaj **konwencji** nazw odpowiedniej dla twojego języka programowania.

- Zachowuj **spójność** nazw. Trzymaj się ustalonej konwencji nazewniczej w całym projekcie. Przykładowo jeśli w innych miejscach używasz "delete" do oznaczania metod usuwających dane, to stosuj również "delete" w innych, podobnych metodach zamiast np. remove czy destroy.

![Blog image](/programming/utils/ccwhatis-14.png)

![Blog image](/programming/utils/ccwhatis-15.png)

- Unikaj **zbyt długich** nazw. Pamiętaj! Idealna nazwa to taka, która jest zwięzła i opisowa.
- Unikaj także **zbyt ogólnych** nazw takich jak execute() czy operation().
- Gdy metoda zwraca wartość typu boolean, to jej nazwa powinna być **pytająca**, podobnie jak w przypadku nazw pól typu boolean.

## Jak nazywać klasy?

- Tak jak w przypadku nazw pól i metod, pisz wszystkie nazwy klas po **angielsku**.
- Używaj **konwencji** nazw odpowiedniej dla twojego języka programowania. Przykładowo w Javie klasy nazywa się według konwencji PascalCase. Zorientuj się, jak wygląda to w twoim języku.
- Używaj **rzeczowników**. Nazywaj klasy tak, aby odzwierciedlały to, czym jest reprezentowany przez tę klasę obiekt.
- Unikaj **zbyt długich**, a także **zbyt ogólnych** nazw.

![Blog image](/programming/utils/ccwhatis-16.png)

![Blog image](/programming/utils/ccwhatis-17.png)

![Blog image](/programming/utils/ccwhatis-18.png)

## Podsumowanie

Jak sam widzisz, wiele konwencji nazywania powtarza się w przypadku pól, metod oraz klas, więc ich nauka i przyswojenie powinny być jeszcze prostsze.

To dopiero pierwszy post z serii czystego kodu, jednak bardzo istotny, ponieważ przedstawiłem w nim jeden z najważniejszych konceptów tego podejścia. Omówiliśmy sobie także krótko czym jest i dlaczego jest on tak ważny. W kolejnych wpisach zajmiemy się opisem pozostałych, ważnych konceptów czystego kodu, które pomogą ci go lepiej opanować. 

Na ten moment proponuję i bardzo polecam ci zajrzeć do twoich projektów, a następnie spojrzeć na nazwy które tam zastosowałeś. Sprawdź, czy wszystkie są czytelne i opisowe. Upewnij się także, czy gdy odłożysz projekt i wrócisz do niego za miesiąc, to czy pozwolą ci na swobodną analizę kodu. Jeśli nie, to już dziś przeprowadź refaktoryzację, ulepsz swój projekt i uczyń swoj