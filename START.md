# Dobry Początek / Good Start — projekt misji chrześcijańskiej

Otwórz `index.html` (lub bezpośrednio `dist/index.html`) w aktualnej przeglądarce. Nie trzeba instalować pakietów ani budować projektu. Do podglądu przez serwer można użyć dowolnego hostingu statycznego lub lokalnego serwera HTTP.

## Co zawiera projekt

- 10 pełnych wersji językowych: polska, angielska, ukraińska, rosyjska, niemiecka, francuska, białoruska, gruzińska, ormiańska i turkmeńska. Menu jest podzielone na Europę i Azję; nazwa rodzima ma angielski odpowiednik. To grupowanie nawigacyjne, nie klasyfikacja państw.
- Jasny i ciemny motyw oraz przełącznik serca. Delikatne serduszka reagują na kursor i kliknięcia. Na ekranie dotykowym — na dotknięcia. Preferencja ograniczenia animacji jest respektowana.
- Galeria z filtrem zdjęć / wideo, powiększeniem, przewijaniem materiałów i odtwarzaczem lokalnego MP4.
- Blog z wyszukiwarką i pełną treścią wpisów.
- Panel kwot i walut PLN / EUR / USD / GBP, jednorazowego i regularnego wsparcia oraz 8 metod: przelew, BLIK, PayPal, Przelewy24, PayU, Revolut, Zrzutka i Patronite. Stripe nie występuje w projekcie.
- Podane profile Facebook i Instagram oraz oryginalne logo użytkownika.

## Wpłaty — aktywacja

Nie przekazano numeru konta ani linków do płatności, dlatego projekt **nie pobiera środków**. Wybór metody otwiera informację o braku konfiguracji i linki kontaktowe do misji. Żaden sukces wpłaty nie jest pozorowany.

Otwórz `dist/edytor.html` → „Wpłaty i kontakt” albo edytuj `dist/content.js`:

1. Uzupełnij `payments.bank.recipient`, `iban`, opcjonalnie `bic` i `title`.
2. Dla pozostałych metod wpisz oficjalny własny link HTTPS w `oneTimeUrl`.
3. `monthlyUrl` uzupełnij tylko wtedy, gdy operator rzeczywiście udostępnia regularne wpłaty dla misji. Puste pole oznacza brak konfiguracji tej częstotliwości. Dla banku regularna wpłata to zlecenie stałe ustawiane przez darczyńcę w banku.
4. Dla BLIK wpisz adres obsługiwanej bramki lub zbiórki oferującej BLIK. Strona nie prosi o 6-cyfrowe kody. Można skierować kilka metod do jednej bramki, jeśli rzeczywiście je obsługuje.
5. Zapisz plik i opublikuj stronę ponownie.

Wybrana na stronie kwota i waluta służą jako deklaracja darczyńcy. Przy stałych linkach operatora darczyńca potwierdza je ponownie w jego serwisie. Projekt nie zawiera backendu do tworzenia transakcji, automatycznych subskrypcji ani potwierdzeń płatności. Dostępność walut i metod zależy od konta misji u operatora. Nie wpisuj tutaj sekretów, haseł ani kluczy API.

## Własny blog i galeria

Otwórz `dist/edytor.html`. Edytor działa lokalnie: można dodawać wpisy i materiały, edytować tłumaczenia każdego z 10 języków, zapisywać szkice oraz eksportować kopie JSON i plik `content.js`.

Po edycji kliknij **„Pobierz content.js”**, zastąp plik o tej nazwie w katalogu `dist/` i opublikuj projekt ponownie. Samo zapisanie szkicu w przeglądarce nie zmienia strony dla innych osób. Nie jest to uwierzytelniony system CMS ani serwerowy panel administracyjny. Edytora nie trzeba umieszczać na publicznym hostingu.

Własne pliki zdjęć i filmów skopiuj do `dist/assets/` i podaj ścieżkę np. `assets/spotkanie.jpg`. Wideo wymaga bezpośredniego pliku MP4 z kodekiem obsługiwanym przez przeglądarkę. Można też podać publiczne adresy HTTPS. Strona nie kopiuje automatycznie treści z Facebooka lub Instagrama.

Nowym wpisom uzupełnij każdy język. Przy brakującym tłumaczeniu strona użyje tekstu angielskiego lub polskiego. Materiały można oznaczyć jako przykładowe. Przed zamianą na rzeczywiste relacje usuń oznaczenie dopiero po uzupełnieniu prawdziwej treści i własnych zdjęć.

## Materiały i zakres treści

Logo dostarczone przez użytkownika: Biblia, krzyż, inicjały EWZ, nazwa „Dobry Początek / Good Start”. Zachowano oryginał; uproszczony znak książki jest użyty pomocniczo w nawigacji. Projekt nawiązuje do portfolio 01.v25 fontem Inter, podziałem pierwszej sekcji, kontrolkami motywu i języka oraz opcjonalnymi efektami kursora.

Profile społecznościowe nie były dostępne do odczytu. Teksty misji są propozycją redakcyjną na podstawie logo. Nie dodano fikcyjnych statystyk, świadectw, nazw członków zespołu ani historii przeprowadzonych akcji.

Galeria i blog zawierają jawnie oznaczone materiały przykładowe. Zdjęcia nie przedstawiają misji. Źródła:

- Creatopy / Unsplash: https://unsplash.com/photos/a-group-of-people-putting-their-hands-together-h43DFZjMcDw
- Shane Hoving / Unsplash: https://unsplash.com/photos/an-open-bible-on-a-table-in-the-sunlight-SZaxKdLwz6o
- Jessica Mangano / Unsplash: https://unsplash.com/photos/an-open-book-sitting-on-top-of-a-wooden-table-9tm5xu8kJdU
- Przykładowe wideo kwiatów CC0: https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
- Inter: licencja `dist/assets/OFL-Inter.txt`.
- Noto Sans Armenian / Georgian: SIL Open Font License, https://github.com/notofonts/armenian i https://github.com/notofonts/georgian.

Tłumaczenia stanowią wersję roboczą projektu; przed publiczną premierą warto zlecić korektę rodzimym użytkownikom poszczególnych języków.

## Hosting

Na zwykły hosting statyczny wgraj **zawartość katalogu dist**, zachowując strukturę plików. Projekt jest samodzielny; zdjęcia, fonty i wideo są lokalne. Zachowaj pliki licencji. Na hostingu HTTP/HTTPS lokalne zasoby działają bez pobierania ich z Google Fonts lub Unsplash.

Zarejestrowano prywatny projekt Sites, lecz wdrożenie online nie doszło do skutku: automatyczna kontrola uprawnień środowiska odrzuciła przekazanie danych do procesu zapisującego źródła. Projekt nie ma obecnie aktywnego podglądu online. Nie zmieniano dostępu na publiczny. Plik `.openai/hosting.json` zachowuje identyfikator do późniejszego wznowienia publikacji.

## Weryfikacja

Zakończono kontrolę kompletności 101 tekstów w każdym z 10 języków, składni skryptów, lokalnych zasobów oraz 698 sprawdzeń działania w środowisku DOM. Sprawdzono m.in. przełączanie języków i motywu, serduszka, filtry galerii, kontrolki filmu, wyszukiwanie i odczyt wpisów, metody wpłat bez konfiguracji, przykładową konfigurację konta i linku operatora, odrzucenie niebezpiecznego adresu oraz zapis i eksport szkiców edytora. Dane testowe nie zostały zapisane w projekcie.

Kontrola wizualna w przeglądarce nie została potwierdzona: lokalny podgląd HTTP był nieosiągalny dla przeglądarki, a publikację Sites zablokowało środowisko. Nie przeprowadzano rzeczywistych płatności.
