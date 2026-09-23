window.HAMS = {
 "meta": {
  "compiled": "2026-09-23",
  "note": "Фактура для раздела «Радиолюбители и радиохулиганы на XHDATA D-808 в Москве и Подмосковье». Учтены только частоты, которые принимает D-808: LW 150–450 кГц, MW 520–1710 кГц, SW 1711–29999 кГц (AM, SSB USB/LSB, CW слушается в режиме SSB), FM 64–108 МГц, AIR 118–137 МГц. УКВ 144/430 МГц сюда не включены. Время указано по Москве (МСК = UTC+3, круглый год) и в UTC. Великобритания и Германия переходят на зимнее время 25.10.2026, поэтому передачи, привязанные к их местному времени, после этой даты сдвигаются на час позже по МСК. Расписания круглых столов на qrz.ru не датированы, их со временем меняют. Записи, где стоит verify: true, перед публикацией надо проверить в эфире или по свежему источнику. Логи пиратов взяты с hfunderground.com за 19–23.09.2026; их вели в основном слушатели в Западной Европе через SDR. Слышимость в Москве зависит от прохождения и в источниках отдельно не подтверждена. Солнечный цикл 25 прошёл максимум в октябре 2024 года и идёт на спад (средний прогноз числа Вольфа на 2026 год 85,3). Поэтому 10 и 12 м открываются реже, чем в 2024–2025 годах, но осенью днём ещё работают."
 },
 "ham_bands": [
  {
   "band": "160 м",
   "range_khz": "1810–2000",
   "ssb_part_khz": "1840–2000",
   "sideband": "LSB",
   "cw_part_khz": "1810–1838",
   "best_time_msk": "Ночь, особенно зимние ночи от заката до рассвета (UTC 15:00–03:00 зимой). Днём слышно только местных, в пределах ~50 км.",
   "what": "Вечером и ночью: Москва, Подмосковье и соседние области, дальше вся европейская Россия, Беларусь, Прибалтика, Польша, Финляндия. Зимой в минимум солнечной активности бывает DX на тысячи километров. Во время контестов (CQ 160, Russian 160m Contest, RAEM) диапазон забит станциями.",
   "tips": "Самый шумный диапазон: летом мешают грозовые разряды, в городе помехи от импульсных блоков питания. Выдвижной штыревой антенны D-808 мало, лучше длинный провод на балконе (подключается к гнезду внешней антенны). Колесо в режиме SLOW (шаг 1 кГц), точная подстройка колёсиком FINE TUNE, фильтр SSB 2,2–3 кГц.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi"
  },
  {
   "band": "80 м",
   "range_khz": "3500–3800",
   "ssb_part_khz": "3600–3800",
   "sideband": "LSB",
   "cw_part_khz": "3500–3580",
   "best_time_msk": "Утро выходных 08:00–11:00 (время круглых столов), вечер и ночь. Лучше всего в часы рассвета и заката.",
   "what": "Главный диапазон «разговорного» эфира России. Утром в выходные идут круглые столы областей Центральной России (3600–3700 кГц), днём слышно корреспондентов за 150–300 км, вечером и ночью всю европейскую часть России, Беларусь, Украину, Казахстан, Европу. 3630 кГц — центр активности цифрового голоса (DV), 3760 кГц — центр активности аварийной связи Района 1 IARU. На участке 3600–3650 кГц проводятся телефонные соревнования.",
   "tips": "Лучший диапазон для первого знакомства с D-808 в Москве: SSB слышно даже на штырь. Прокрутите 3600–3700 кГц в режиме LSB в субботу или воскресенье около 9:00 МСК.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; https://www.qrz.ru/roundtables/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi"
  },
  {
   "band": "60 м",
   "range_khz": "5351.5–5366.5 (всемирная вторичная полоса WRC-15; в разных странах разрешённые участки отличаются)",
   "ssb_part_khz": "в пределах 5351.5–5366.5; британская передача GB2RS идёт на 5398.5",
   "sideband": "USB",
   "cw_part_khz": "5351.5–5354",
   "best_time_msk": "День и вечер",
   "what": "Российским радиолюбителям диапазон не выделен: в частотном плане СРР его нет. Поэтому здесь слышно только иностранные станции: Великобританию, Германию, Скандинавию и другие. Пример — воскресная британская сводка GB2RS на 5398.5 кГц USB в 15:00 UTC.",
   "tips": "На 60 м голос по традиции идёт в USB, хотя частота ниже 10 МГц.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; https://forum.qrz.ru/390-60-metrovyy-diapazon-5351-5-5366-5-kgts/10255-chto-za-diapazon-60-m.html ; https://rsgb.services/public/gb2rs/gb2rs_broadcast_schedule.pdf",
   "verify": true
  },
  {
   "band": "40 м",
   "range_khz": "7000–7200",
   "ssb_part_khz": "7053–7200",
   "sideband": "LSB",
   "cw_part_khz": "7000–7050",
   "best_time_msk": "Весь день; днём связь на 500–1500 км, вечером и ночью по всему миру (ближняя «мёртвая зона» в несколько сотен км)",
   "what": "Днём вся европейская Россия, Беларусь, Украина, Европа, вечером и ночью Урал, Сибирь, Ближний Восток, ночью Америка. Около 7110 кГц — центр активности аварийной связи Района 1.",
   "tips": "Вечером диапазон рядом с сильными вещательными станциями 41 м (7200+ кГц); на D-808 для SSB ставьте узкий фильтр 2 кГц. CW ищите в 7000–7040 кГц в режиме USB/LSB.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi"
  },
  {
   "band": "30 м",
   "range_khz": "10100–10150",
   "ssb_part_khz": "нет (телефон допускается только при трафике по спасению жизни)",
   "sideband": "USB",
   "cw_part_khz": "10100–10130",
   "best_time_msk": "Днём и вечером",
   "what": "Только телеграф и цифровые виды (FT8 около 10136 кГц). Круглосуточно работает маяк DK0WCY на 10144 кГц (Германия): передаёт телеграфом данные о солнечной и геомагнитной обстановке.",
   "tips": "Для CW включите USB и фильтр 0.5–1 кГц. WARC-диапазон, соревнований на нём не проводят.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://www.dk0wcy.de/schedule_en.html"
  },
  {
   "band": "20 м",
   "range_khz": "14000–14350",
   "ssb_part_khz": "14112–14350",
   "sideband": "USB",
   "cw_part_khz": "14000–14070",
   "best_time_msk": "Днём и вечером; летом почти круглосуточно, зимой закрывается вскоре после заката",
   "what": "Главный DX-диапазон: днём Европа, Азия, Ближний Восток, Африка, вечером Америка, утром Дальний Восток и Океания. Российские станции ближе 1500–2000 км часто попадают в «мёртвую зону». 14300 кГц — всемирный центр активности аварийной связи. На 14100 кГц работают маяки NCDXF/IARU (18 маяков по очереди, цикл 3 минуты).",
   "tips": "Лучше всего слышно на полноразмерную наружную антенну. По маякам на 14100/18110/21150/24930/28200 кГц можно проверить, куда сейчас открыт диапазон.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi ; https://www.iaru.org/on-the-air/beacons/"
  },
  {
   "band": "17 м",
   "range_khz": "18068–18168",
   "ssb_part_khz": "18111–18168",
   "sideband": "USB",
   "cw_part_khz": "18068–18095",
   "best_time_msk": "Светлое время суток",
   "what": "Спокойный WARC-диапазон без соревнований: дальние связи с Азией, Африкой, Америкой. 18160 кГц — центр активности аварийной связи. Маяк NCDXF на 18110 кГц.",
   "tips": "Днём, когда 20 м переполнен, здесь тише и чище.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; https://www.iaru.org/on-the-air/beacons/"
  },
  {
   "band": "15 м",
   "range_khz": "21000–21450",
   "ssb_part_khz": "21151–21450",
   "sideband": "USB",
   "cw_part_khz": "21000–21070",
   "best_time_msk": "Днём (примерно 09:00–18:00 МСК осенью); сильно зависит от солнечной активности",
   "what": "Днём дальний DX на 5000–6000 км: Азия, Африка, Ближний Восток, Америка. Радиолюбители сами хвалят диапазон за то, что на нём дальние связи возможны малой мощностью. 21360 кГц — центр активности аварийной связи.",
   "tips": "На спаде цикла диапазон открывается днём и не каждый день; проверяйте маяк NCDXF на 21150 кГц.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi"
  },
  {
   "band": "12 м",
   "range_khz": "24890–24990",
   "ssb_part_khz": "24931–24990",
   "sideband": "USB",
   "cw_part_khz": "24890–24915",
   "best_time_msk": "Днём в дни хорошего прохождения",
   "what": "WARC-диапазон, соревнований нет. При открытии слышно Европу, Азию, Африку и Америку; в остальное время диапазон пуст.",
   "tips": "Маяк NCDXF на 24930 кГц сразу показывает, есть ли прохождение.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; https://www.iaru.org/on-the-air/beacons/"
  },
  {
   "band": "10 м",
   "range_khz": "28000–29700",
   "ssb_part_khz": "28225–29000 (по плану СРР; SSB-активность в основном 28300–28800)",
   "sideband": "USB",
   "cw_part_khz": "28000–28070",
   "best_time_msk": "Днём при открытом прохождении; местные станции слышно в любое время прямой (земной) волной",
   "what": "Самый нестабильный КВ-диапазон. При прохождении слышно весь мир, «мёртвая зона» 2000–2500 км. В Москве и Подмосковье на 10 м работают местные круглые столы: Москва — 28700 кГц, Серпухов — 28600 кГц. 29000–29700 кГц — ЧМ-симплекс и ретрансляторы (29.6 МГц FM D-808 не принимает, только AM/SSB).",
   "tips": "Вечерние местные круглые столы на 28600/28700 кГц в Подмосковье — лучший способ услышать соседей на D-808 без внешней антенны.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi ; https://cskr.su/?page_id=24 ; https://www.qrz.ru/roundtables/"
  },
  {
   "band": "CB 27 МГц (Си-Би)",
   "range_khz": "26960–27410 (40 каналов сетки «C»; в России официально сетка «с пятёркой на конце», смещённая на 5 кГц вниз, но широко используется и европейская «0»)",
   "ssb_part_khz": "вся сетка; вызывная частота дальних SSB-связей 27190",
   "sideband": "AM (основная), FM, также USB/LSB",
   "cw_part_khz": "нет",
   "best_time_msk": "Трассы и город — круглосуточно (прямая волна, единицы-десятки км); при прохождении днём дальние связи с Европой",
   "what": "Канал 15 C15EA = 27135 кГц AM — вызывной автомобильный канал: дальнобойщики по всей России (пробки, ДПС, погода). Канал 9 (27065) — аварийный, канал 19 (27185) — международный информационный, в России распространения не получил. Си-Би в России — нелицензируемая гражданская связь: мощность до 4 Вт AM/FM и до 12 Вт SSB, до 4 Вт без регистрации.",
   "tips": "На D-808 слушайте 27135 кГц в режиме AM у МКАД, на М-2, М-4, М-11, трассе «Дон». Если в SW режиме нет нужного шага, ставьте 5 кГц.",
   "source": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8-%D0%91%D0%B8 ; https://blog.promarket.info/blog/blog/table-grid-of-frequencies-for-radio-stations-of-cb-civilian-range-27-mhz/"
  }
 ],
 "nets": [
  {
   "name": "Круглый стол Центрального Серпуховского клуба радиолюбителей (ведущий RU3DD)",
   "freq_khz": "28600",
   "mode": "USB",
   "days": "Пятница (основной эфир); повторы по вторникам и субботам. На странице «Наши частоты» указано «ежедневно»",
   "time_msk": "21:00",
   "time_utc": "18:00",
   "what": "Местный круглый стол юга Подмосковья: Серпухов и окрестности, гости из соседних областей. Говорят о технике, ремонте, антеннах, прохождении. На сайте клуба выкладывают сводки эфиров (есть за февраль 2026).",
   "source": "https://cskr.su/?page_id=18 ; https://cskr.su/?page_id=24",
   "verify": true
  },
  {
   "name": "Круглый стол Москвы (R3A, ведущий RA3AKM)",
   "freq_khz": "28700",
   "mode": "USB",
   "days": "Четверг",
   "time_msk": "21:00",
   "time_utc": "18:00",
   "what": "Московский круглый стол на 10 м: местные станции, обсуждение техники, купля-продажа и обмен аппаратуры.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Тверской области (R3I, UA3ICK)",
   "freq_khz": "3642",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол радиолюбителей: новости, перекличка, обмен техникой.",
   "source": "https://www.qrz.ru/roundtables/ ; https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
   "verify": true
  },
  {
   "name": "Круглый стол Рязанской области (R3S)",
   "freq_khz": "3640",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "09:30",
   "time_utc": "06:30",
   "what": "Областной круглый стол; Рязань близко к Москве, поэтому его хорошо слышно.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Владимирской области (R3V)",
   "freq_khz": "3638",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол радиолюбителей Владимирской области.",
   "source": "https://www.qrz.ru/roundtables/ ; https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
   "verify": true
  },
  {
   "name": "Круглый стол Калужской области (R3X)",
   "freq_khz": "3665",
   "mode": "LSB",
   "days": "Суббота (зимой); четверг (летом)",
   "time_msk": "09:00 (зима) / 20:00 (лето)",
   "time_utc": "06:00 / 17:00",
   "what": "Областной круглый стол Калужской области; с октября по весну — по субботам утром.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Тульской области (R3P)",
   "freq_khz": "3687",
   "mode": "LSB",
   "days": "2-е и 4-е воскресенье месяца",
   "time_msk": "08:00",
   "time_utc": "05:00",
   "what": "Областной круглый стол Тульской области.",
   "source": "https://www.qrz.ru/roundtables/ ; https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
   "verify": true
  },
  {
   "name": "Круглый стол Ярославской области (R3M, RK3MWA)",
   "freq_khz": "3615",
   "mode": "LSB",
   "days": "Суббота (зимой); среда (летом)",
   "time_msk": "10:00 (зима) / 19:00 (лето)",
   "time_utc": "07:00 / 16:00",
   "what": "Областной круглый стол Ярославской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Костромской области (R3N)",
   "freq_khz": "3655",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол. В более старом списке ra1ohx.ru указаны 3620 кГц и 09:30.",
   "source": "https://www.qrz.ru/roundtables/ ; https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
   "verify": true
  },
  {
   "name": "Круглый стол Ивановской области (R3U)",
   "freq_khz": "3612",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Ивановской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Нижегородской области (R3T)",
   "freq_khz": "3605",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Нижегородской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Смоленской области (R3L, RZ3LA)",
   "freq_khz": "3605",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Смоленской области. В списке ra1ohx.ru указано 3607 кГц.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Орловской области (R3E, RA3EA)",
   "freq_khz": "3675",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Орловской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Брянской области (R3Y)",
   "freq_khz": "3675",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Брянской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Воронежской области (R3Q)",
   "freq_khz": "3663",
   "mode": "LSB",
   "days": "Среда",
   "time_msk": "22:00",
   "time_utc": "19:00",
   "what": "Вечерний круглый стол Воронежской области: в это время 80 м хорошо открыт на Москву.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Курской области (R3W)",
   "freq_khz": "3685",
   "mode": "LSB",
   "days": "Четверг",
   "time_msk": "19:00",
   "time_utc": "16:00",
   "what": "Областной круглый стол Курской области.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Белгородской области (R3Z)",
   "freq_khz": "3681",
   "mode": "LSB",
   "days": "Воскресенье (по ra1ohx — 1-е и 3-е воскресенье)",
   "time_msk": "08:00",
   "time_utc": "05:00",
   "what": "Областной круглый стол Белгородской области.",
   "source": "https://www.qrz.ru/roundtables/ ; https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
   "verify": true
  },
  {
   "name": "Круглый стол Тамбовской области (R3R)",
   "freq_khz": "3668",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:00",
   "time_utc": "06:00",
   "what": "Областной круглый стол Тамбовской области. По средам в 21:00 сбор идёт на УКВ (145.300 МГц), его D-808 не примет.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "Круглый стол Санкт-Петербурга (R1A)",
   "freq_khz": "3630",
   "mode": "LSB",
   "days": "Суббота",
   "time_msk": "09:30",
   "time_utc": "06:30",
   "what": "Круглый стол радиолюбителей Санкт-Петербурга; в Москве его слышно на 80 м пространственной волной.",
   "source": "https://www.qrz.ru/roundtables/",
   "verify": true
  },
  {
   "name": "GB2RS — еженедельные новости Радиообщества Великобритании (RSGB), национальная передача на 40 м",
   "freq_khz": "7127",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "12:00 (до 25.10.2026); 13:00 (зимой)",
   "time_utc": "09:00 (летом UK) / 10:00 (зимой UK); в расписании — 10:00 по времени UK",
   "what": "Сводка радиолюбительских новостей на английском: события, экспедиции, соревнования, прогноз прохождения. Передатчики в Эксмуре и Саттон-Колдфилде.",
   "source": "https://rsgb.services/public/gb2rs/gb2rs_broadcast_schedule.pdf",
   "verify": true
  },
  {
   "name": "GB2RS — новости RSGB на 60 м",
   "freq_khz": "5398.5",
   "mode": "USB",
   "days": "Воскресенье",
   "time_msk": "18:00",
   "time_utc": "15:00 (круглый год по UTC)",
   "what": "Та же воскресная сводка новостей RSGB на английском с передатчиков в Ройстоне, Меппершолле и Салби (остров Мэн).",
   "source": "https://rsgb.services/public/gb2rs/gb2rs_broadcast_schedule.pdf",
   "verify": true
  },
  {
   "name": "GB2RS — новости RSGB на 160 м",
   "freq_khz": "1990",
   "mode": "LSB",
   "days": "Воскресенье",
   "time_msk": "23:30 (до 25.10.2026); 00:30 понедельника (зимой)",
   "time_utc": "20:30 / 21:30 (в расписании — 21:30 по времени UK)",
   "what": "Вечерний выпуск новостей RSGB на 160 м. Из Москвы слышно только при хорошем ночном прохождении и с наружной антенной.",
   "source": "https://rsgb.services/public/gb2rs/gb2rs_broadcast_schedule.pdf",
   "verify": true
  },
  {
   "name": "Deutschland-Rundspruch DARC (DL0DL, Баунаталь)",
   "freq_khz": "3777",
   "mode": "LSB",
   "days": "Четверг",
   "time_msk": "20:30",
   "time_utc": "17:30",
   "what": "Еженедельный бюллетень Немецкого радиоклуба DARC на немецком языке; потом его повторяют районные станции на своих частотах.",
   "source": "https://www.darc.de/nachrichten/deutschland-rundspruch/",
   "verify": true
  },
  {
   "name": "RADIO DARC — радиолюбительский журнал на вещательных КВ (AM)",
   "freq_khz": "9670; 6070; 3955",
   "mode": "AM",
   "days": "Воскресенье (9670 и 6070 кГц); ежедневно (3955 кГц)",
   "time_msk": "Вс 12:00 (9670/6070); ежедневно 21:00 (3955)",
   "time_utc": "Вс 09:00; ежедневно 18:00 (по летнему времени ЦЕ; зимой, вероятно, на час позже)",
   "what": "Еженедельная передача о радиолюбительстве на немецком языке от DARC. На 9670 кГц работает передатчик 250 кВт в Вуффертоне (Англия), на 6070 и 3955 кГц — Ингольштадт. Слушается в обычном AM без SSB, так что это самый простой способ услышать радиолюбительскую передачу на D-808. Расписание действует с 17.05.2026.",
   "source": "https://www.darc.de/nachrichten/radio-darc/",
   "verify": true
  },
  {
   "name": "Маяк DK0WCY (Германия) — данные о солнечной и геомагнитной обстановке",
   "freq_khz": "10144",
   "mode": "CW",
   "days": "Ежедневно, круглосуточно",
   "time_msk": "круглосуточно; сводка каждые 10 минут",
   "time_utc": "круглосуточно",
   "what": "Маяк мощностью 10 Вт на диполь. Телеграфом передаёт индекс K, данные о солнечной активности и полярных сияниях; в минуты H+10 и H+50 — RTTY и PSK31. С 07:20 до 09:00 и с 16:00 до 19:00 по местному времени Германии дополнительно работает на 3579 кГц.",
   "source": "http://www.dk0wcy.de/schedule_en.html ; https://ra4fjv.org/en/novice/beacon-dk0wcy-10144-khz-solar-activity",
   "verify": false
  },
  {
   "name": "Маяки NCDXF/IARU International Beacon Project",
   "freq_khz": "14100; 18110; 21150; 24930; 28200",
   "mode": "CW",
   "days": "Ежедневно, круглосуточно",
   "time_msk": "круглосуточно, цикл 3 минуты",
   "time_utc": "круглосуточно",
   "what": "18 маяков по всему миру по очереди передают позывной телеграфом на пяти частотах, каждый по 10 секунд. По тому, какие маяки слышно, видно, куда открыто прохождение.",
   "source": "https://www.iaru.org/on-the-air/beacons/ ; https://en.wikipedia.org/wiki/International_Beacon_Project",
   "verify": false
  },
  {
   "name": "Центры активности аварийной радиосвязи Района 1 IARU и всемирные",
   "freq_khz": "3760; 7110; 14300; 18160; 21360",
   "mode": "LSB (3760, 7110) / USB (14300, 18160, 21360)",
   "days": "При чрезвычайных ситуациях; частоты держат свободными",
   "time_msk": "по событию",
   "time_utc": "по событию",
   "what": "Частоты, которые план СРР отмечает как центры активности аварийной связи. На 14300 кГц в Америке ежедневно работает морская сеть Maritime Mobile Service Network (примерно 16:00–02:00 UTC летом, 17:00–03:00 UTC зимой). Из Москвы её слышно редко: вечером, при хорошем прохождении на запад.",
   "source": "https://srr.ru/tablitsa-chastotnogo-raspisaniya/ ; https://netfinder.radio/nets/view/maritime-mobile-service-net",
   "verify": true
  },
  {
   "name": "Си-Би: 15-й канал — вызывной автомобильный",
   "freq_khz": "27135",
   "mode": "AM",
   "days": "Ежедневно",
   "time_msk": "круглосуточно",
   "time_utc": "круглосуточно",
   "what": "Дальнобойщики и автомобилисты по всей России: обстановка на дорогах, посты ДПС, пробки, погода. Лучше всего слышно у крупных трасс Подмосковья.",
   "source": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8-%D0%91%D0%B8",
   "verify": false
  }
 ],
 "contests": [
  {
   "name": "Кубок им. А.С. Попова (детские соревнования)",
   "dates": "03.10.2026",
   "bands": "КВ",
   "mode": "SSB",
   "source": "https://www.qrz.ru/contest/index?m=10 ; https://srr.ru/sorevnovaniya/radiosvyaz-na-kv/tablitsa-sorevnovanij-po-radiosvyazi-n/"
  },
  {
   "name": "WAG Contest (Worked All Germany)",
   "dates": "17–18.10.2026",
   "bands": "160–10 м",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=10"
  },
  {
   "name": "CQ World Wide DX Contest SSB",
   "dates": "24.10.2026 00:00 UTC – 25.10.2026 23:59 UTC (МСК: 24.10 03:00 – 26.10 02:59)",
   "bands": "160, 80, 40, 20, 15, 10 м",
   "mode": "SSB",
   "source": "https://cqww.com/rules/"
  },
  {
   "name": "Чемпионат Москвы по радиосвязи на КВ",
   "dates": "04.11.2026, 05:00–06:59 UTC (08:00–09:59 МСК)",
   "bands": "КВ (80/40 м)",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=11",
   "verify": true
  },
  {
   "name": "Мемориал Г.В. Нехорошева",
   "dates": "05.11.2026, 15:00–17:59 UTC",
   "bands": "КВ",
   "mode": "CW",
   "source": "https://www.qrz.ru/contest/index?m=11 ; https://srr.ru/sorevnovaniya/radiosvyaz-na-kv/tablitsa-sorevnovanij-po-radiosvyazi-n/"
  },
  {
   "name": "Мемориал Ю.В. Фогеля",
   "dates": "14.11.2026",
   "bands": "КВ",
   "mode": "SSB",
   "source": "https://srr.ru/sorevnovaniya/radiosvyaz-na-kv/tablitsa-sorevnovanij-po-radiosvyazi-n/",
   "verify": true
  },
  {
   "name": "LZ DX Contest",
   "dates": "21.11.2026 12:00 UTC – 22.11.2026 11:59 UTC",
   "bands": "80–10 м",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=11"
  },
  {
   "name": "CQ World Wide DX Contest CW",
   "dates": "28.11.2026 00:00 UTC – 29.11.2026 23:59 UTC",
   "bands": "160, 80, 40, 20, 15, 10 м",
   "mode": "CW",
   "source": "https://cqww.com/rules/"
  },
  {
   "name": "Чемпионат им. В.И. Мудренко",
   "dates": "04.12.2026, 13:00–16:59 UTC",
   "bands": "КВ",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=12"
  },
  {
   "name": "ARRL 10 Meter Contest",
   "dates": "12.12.2026 00:00 UTC – 13.12.2026 23:59 UTC",
   "bands": "10 м",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=12"
  },
  {
   "name": "Russian 160m DX Contest",
   "dates": "18.12.2026, 17:00–20:59 UTC (20:00–23:59 МСК)",
   "bands": "160 м",
   "mode": "CW/SSB",
   "source": "https://www.qrz.ru/contest/index?m=12",
   "verify": true
  },
  {
   "name": "RAEM Contest (памяти Э.Т. Кренкеля)",
   "dates": "27.12.2026, 00:00–11:59 UTC",
   "bands": "80–10 м",
   "mode": "CW",
   "source": "https://www.qrz.ru/contest/index?m=12 ; https://srr.ru/sorevnovaniya/radiosvyaz-na-kv/tablitsa-sorevnovanij-po-radiosvyazi-n/"
  },
  {
   "name": "Кубок России по радиосвязи на КВ — телефон и телеграф",
   "dates": "Январь 2027: телефон — первые выходные, телеграф — следующие выходные (в 2026 году 3–4 и 10–11 января)",
   "bands": "КВ",
   "mode": "SSB / CW",
   "source": "https://www.qrz.ru/contest/index?m=1",
   "verify": true
  },
  {
   "name": "CQ World Wide 160-Meter Contest CW",
   "dates": "Последние полные выходные января 2027, с 22:00 UTC пятницы до 22:00 UTC воскресенья (ориентировочно 29–31.01.2027; в 2026 году 23–25.01)",
   "bands": "160 м",
   "mode": "CW",
   "source": "https://cq160.com/rules/",
   "verify": true
  },
  {
   "name": "ARRL International DX Contest CW",
   "dates": "Февраль 2027, третьи полные выходные (в 2026 году 21–22.02)",
   "bands": "160–10 м",
   "mode": "CW",
   "source": "https://www.qrz.ru/contest/index?m=2",
   "verify": true
  },
  {
   "name": "CQ World Wide 160-Meter Contest SSB",
   "dates": "Последние полные выходные февраля 2027 (ориентировочно 26–28.02.2027; в 2026 году 27.02–01.03)",
   "bands": "160 м",
   "mode": "SSB",
   "source": "https://cq160.com/rules/ ; https://www.qrz.ru/contest/index?m=2",
   "verify": true
  },
  {
   "name": "ARRL International DX Contest SSB",
   "dates": "Первые полные выходные марта 2027 (в 2026 году 7–8.03)",
   "bands": "160–10 м",
   "mode": "SSB",
   "source": "https://www.qrz.ru/contest/index?m=3",
   "verify": true
  },
  {
   "name": "КВ Чемпионат России — телефон",
   "dates": "Середина марта 2027 (в 2026 году 14–15.03, 17:00–08:59 UTC)",
   "bands": "160/80/40 м",
   "mode": "SSB",
   "source": "https://www.qrz.ru/contest/index?m=3",
   "verify": true
  },
  {
   "name": "Russian DX Contest (RDXC), 34-й",
   "dates": "20.03.2027 12:00 UTC – 21.03.2027 11:59 UTC (МСК: 20.03 15:00 – 21.03 14:59)",
   "bands": "160, 80, 40, 20, 15, 10 м",
   "mode": "CW/SSB",
   "source": "https://www.rdxc.org/rules_eng"
  },
  {
   "name": "CQ WW WPX Contest SSB",
   "dates": "Последние полные выходные марта 2027 (ориентировочно 27–28.03.2027; в 2026 году 28–29.03)",
   "bands": "160–10 м",
   "mode": "SSB",
   "source": "https://www.qrz.ru/contest/index?m=3 ; https://cqwpx.com/rules/",
   "verify": true
  }
 ],
 "hooligans": [
  {
   "range_or_freq_khz": "1600–2200 («пионерка», «пионерский диапазон»; по FAQ — 1300–2200)",
   "mode": "AM",
   "when_msk": "Вечер и ночь",
   "what": "Исторический диапазон «шарманок»: самодельных AM-передатчиков на лампах 6П3С/6П6С, модулятором служила радиола или магнитофон. Крутили музыку, которой не было на советском радио, и переговаривались между собой. Сейчас операторы называют себя «свободными операторами», международное обозначение — UNLIS. Подтверждений регулярной активности в 2025–2026 годах в Московском регионе не найдено.",
   "region": "СССР, затем Россия, Украина, Беларусь (пик в конце 1960-х — 1970-х)",
   "source": "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D1%85%D1%83%D0%BB%D0%B8%D0%B3%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE ; https://www.cqdx.ru/ham/ham-radio-news/radio-pirate-faq-ru/ ; https://www.svoboda.org/a/27271018.html",
   "verify": true
  },
  {
   "range_or_freq_khz": "2900–3300 («тройка»; HFUnderground: 2900–3200)",
   "mode": "AM",
   "when_msk": "Вечер и ночь, многие активны каждую ночь",
   "what": "Сейчас это основное место радиохулиганов. Большинство станций ведут двусторонние переговоры по-русски на любые темы, часть крутит музыку. Передатчики самодельные или военные времён Второй мировой, сильно «плывут» по частоте, звук плохой. Слышно по всей Европе. Видео «3 МГц — АМ — свободное радио» с этой техникой выложено на Rutube 06.03.2025.",
   "region": "Россия, Украина (слышно по всей Европе)",
   "source": "https://www.hfunderground.com/wiki/index.php/Radio_Hooligans ; https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D1%85%D1%83%D0%BB%D0%B8%D0%B3%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE ; https://rutube.ru/video/8081981e3e425e6cf180fa2be34416b8/",
   "verify": true
  },
  {
   "range_or_freq_khz": "2920",
   "mode": "USB (SSB)",
   "when_msk": "Ночь",
   "what": "Названа популярной ночной частотой нелицензионных SSB-переговоров. Это авиационный участок (2850–3155 кГц), так что рядом слышно и служебную авиасвязь.",
   "region": "Россия / СНГ",
   "source": "https://www.cqdx.ru/ham/ham-radio-news/radio-pirate-faq-ru/ ; https://6p3s.ru/freq.php",
   "verify": true
  },
  {
   "range_or_freq_khz": "6660",
   "mode": "USB (SSB)",
   "when_msk": "День и вечер",
   "what": "Названа популярной дневной и вечерней частотой нелицензионных SSB-переговоров (авиационный участок 6525–6765 кГц).",
   "region": "Россия / СНГ",
   "source": "https://www.cqdx.ru/ham/ham-radio-news/radio-pirate-faq-ru/ ; https://6p3s.ru/freq.php",
   "verify": true
  },
  {
   "range_or_freq_khz": "6000–6400 (гармоники)",
   "mode": "AM",
   "when_msk": "Вечер и ночь",
   "what": "Передатчики радиохулиганов с 2.9–3.2 МГц иногда дают сильные вторые гармоники в 48-метровом «европиратском» диапазоне: неустойчивая AM-«каша» с русской речью или музыкой рядом с европейскими пиратами.",
   "region": "Россия, Украина",
   "source": "https://www.hfunderground.com/wiki/index.php/Radio_Hooligans",
   "verify": true
  },
  {
   "range_or_freq_khz": "10460",
   "mode": "USB (SSB)",
   "when_msk": "День",
   "what": "Названа дневной частотой нелицензионных SSB-переговоров.",
   "region": "Россия / СНГ",
   "source": "https://www.cqdx.ru/ham/ham-radio-news/radio-pirate-faq-ru/",
   "verify": true
  },
  {
   "range_or_freq_khz": "26000–28000 (вне разрешённой сетки Си-Би 26960–27410)",
   "mode": "AM / FM / SSB",
   "when_msk": "Днём при прохождении, ближняя связь в любое время",
   "what": "Отмечена ограниченная нелицензионная активность за пределами легальной сетки Си-Би: самодельные и «расширенные» Си-Би радиостанции. Точных частот и времени источники не дают.",
   "region": "Россия / Европа",
   "source": "https://6p3s.ru/freq.php ; https://www.hfunderground.com/wiki/index.php/CB_Radio",
   "verify": true
  }
 ],
 "pirates": [
  {
   "freq_khz": "3940",
   "station": "Music Wave Radio (русскоязычный пират: передатчик, по разным данным, в Беларуси, программы готовят в России)",
   "mode": "AM",
   "when_msk": "Нерегулярно, по анонсам в Telegram/VK; обычно вечер выходных, после 22:00 МСК (19:00 UTC). В EiBi: 19:00–04:00 UTC, нерегулярно",
   "region": "Беларусь / Россия",
   "source": "http://www.eibispace.de/dx/sked-a26.csv ; https://swling.blog/2024/08/09/music-wave-radio-na-piratskoj-chastote-3940-khz/ ; https://petersdxcorner.nl/belarus/qsl-music-wave-radio-3940-khz/",
   "verify": true
  },
  {
   "freq_khz": "3940",
   "station": "Radio Jan van Gent",
   "mode": "AM",
   "when_msk": "Выходные днём и вечером; лог 20.09.2026 (вс) 19:32–20:10 МСК (16:32–17:10 UTC), поп-рок",
   "region": "Нидерланды / Бельгия",
   "source": "https://www.hfunderground.com/board/index.php/topic,169404.0.html",
   "verify": true
  },
  {
   "freq_khz": "3280",
   "station": "Radio Baltic75",
   "mode": "AM",
   "when_msk": "Лог 20.09.2026 (вс) 20:31 МСК (17:31 UTC), рок (Metallica); принят на SDR в Финляндии",
   "region": "Северная Европа",
   "source": "https://www.hfunderground.com/board/index.php/topic,169412.0.html",
   "verify": true
  },
  {
   "freq_khz": "6204.5",
   "station": "Weekend Music Radio",
   "mode": "AM",
   "when_msk": "Выходные днём: логи 19.09.2026 16:00 МСК (13:00 UTC) и 20.09.2026 12:26 МСК (09:26 UTC); также 6160 и 3975 кГц (апрель 2026) и 6300 кГц (19.09.2026 10:05 МСК)",
   "region": "Европа",
   "source": "https://www.hfunderground.com/board/index.php/topic,169379.0.html ; https://www.hfunderground.com/board/index.php?topic=162553.0",
   "verify": true
  },
  {
   "freq_khz": "6210",
   "station": "Contikenzo; Radio Ronalisa; King Shortwave",
   "mode": "AM",
   "when_msk": "Выходные: 19.09.2026 18:09 МСК (King Shortwave), 20.09.2026 19:45–21:10 МСК (Radio Ronalisa, Contikenzo)",
   "region": "Нидерланды",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6238",
   "station": "Delta Radio 48 (DeltaRadio48)",
   "mode": "AM",
   "when_msk": "Выходные и будни: 19.09.2026 18:33 и 21:38 МСК, 21.09.2026 12:22 МСК",
   "region": "Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6250–6260",
   "station": "Dublin's ABC",
   "mode": "AM",
   "when_msk": "Выходные утром: 19.09.2026 12:02 МСК (6260), 20.09.2026 12:27 МСК (6250)",
   "region": "Ирландия / Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6262.5 // 6335",
   "station": "Merseyland Alternative Radio",
   "mode": "AM",
   "when_msk": "Выходные днём: 19.09.2026 15:33–15:48 МСК, 20.09.2026 12:38–14:49 МСК; 21.09.2026 18:15 МСК",
   "region": "Великобритания / Европа",
   "source": "https://www.hfunderground.com/board/index.php/topic,169390.0.html",
   "verify": true
  },
  {
   "freq_khz": "6275",
   "station": "Radio Scotland International; Radio Mordor",
   "mode": "AM",
   "when_msk": "Выходные: 19.09.2026 17:54 МСК (Radio Mordor), 20.09.2026 11:50 МСК (Radio Scotland Int.)",
   "region": "Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6280",
   "station": "Radio Atlantis (через передатчик Taxus); Radio Monique International",
   "mode": "AM",
   "when_msk": "19.09.2026 16:41 МСК (Monique), 21.09.2026 17:35 МСК и 22.09.2026 18:24 МСК (Atlantis)",
   "region": "Нидерланды / Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6290",
   "station": "Голландские станции и QSO: Radio Veenpark, De Kat, Radio Markies, Radio Intruder, Radio Silence, Radio Lowland, Panda Radio",
   "mode": "AM",
   "when_msk": "Самая оживлённая частота выходных: логи 19–23.09.2026 с 12:00 до 23:00 МСК и ночью (Panda Radio 23.09.2026 04:02 МСК). Голландская народная музыка, поп, переговоры операторов",
   "region": "Нидерланды",
   "source": "https://www.hfunderground.com/board/index.php/topic,169447.0.html ; https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6300",
   "station": "Radio Atlantis; Kiss AM; Radio Balconia; Weekend Music Radio",
   "mode": "AM",
   "when_msk": "19.09.2026 16:00 МСК (Kiss AM), 20.09.2026 10:23–10:45 и 18:12 МСК (Kiss AM), 11:08 МСК (Radio Atlantis), 21.09.2026 17:43 МСК (Balconia), 23.09.2026 10:32 и 18:40 МСК (Atlantis, Queen)",
   "region": "Нидерланды / Европа",
   "source": "https://www.hfunderground.com/board/index.php/topic,169514.0.html ; https://www.hfunderground.com/board/index.php/topic,169364.0.html",
   "verify": true
  },
  {
   "freq_khz": "6305–6306",
   "station": "Radio Starlight; Radio Sombrero",
   "mode": "AM",
   "when_msk": "21.09.2026 19:35 МСК (Starlight), 20:05 МСК (Sombrero)",
   "region": "Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6875",
   "station": "Radio Europe (Италия)",
   "mode": "AM",
   "when_msk": "19.09.2026 17:31 МСК, 20.09.2026 12:49 МСК",
   "region": "Италия",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6930",
   "station": "Enterprise Radio / Bande Rumorose (предположительно)",
   "mode": "AM",
   "when_msk": "20.09.2026 09:37 МСК",
   "region": "Италия",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "6940",
   "station": "Zeppelin Radio (предположительно) и неопознанные станции",
   "mode": "AM",
   "when_msk": "20.09.2026 12:03 и 21:39 МСК, 21.09.2026 19:50 МСК",
   "region": "Европа",
   "source": "https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "7400",
   "station": "Radio Piepzender (NL) и неопознанные станции с «non-stop music»",
   "mode": "AM",
   "when_msk": "Логи 19–22.09.2026 утром и днём (11:07–15:00 МСК) и вечером (22:06–23:09 МСК); EiBi: Radio Piepzender 7400 кГц круглосуточно",
   "region": "Нидерланды",
   "source": "http://www.eibispace.de/dx/sked-a26.csv ; https://www.hfunderground.com/board/index.php?board=12.0",
   "verify": true
  },
  {
   "freq_khz": "5835",
   "station": "Radio Europe UA (в EiBi — «Radio Europa», UKR, круглосуточно)",
   "mode": "AM",
   "when_msk": "Лог 21.09.2026 20:42 МСК (17:42 UTC), рок-н-ролл 1950-х (Chuck Berry); в EiBi — 00:00–24:00",
   "region": "Украина (по EiBi)",
   "source": "http://www.eibispace.de/dx/sked-a26.csv ; https://www.hfunderground.com/board/index.php/topic,169460.0.html",
   "verify": true
  },
  {
   "freq_khz": "1610–1640 (диапазон 186 м), изредка до 1700",
   "station": "Голландские СВ-пираты: Marianne (1620, вторник вечером), Torpedojager (1636, четверг утром), Noordster (1620, раннее утро воскресенья), Witte Tornado (1647, иногда по воскресеньям с 16:00 UTC), Barones и Casablanca (1640), Ros Am (1620), Toulouse (1611), Bluebird (1629)",
   "mode": "AM",
   "when_msk": "Ежедневно, в выходные намного активнее; лучшее время приёма вдали от Нидерландов — с 20:00 МСК (17:00 UTC) до 03:00 МСК",
   "region": "Нидерланды (приём в Москве — только в тёмное время и с хорошей антенной, дистанция ~2100 км)",
   "source": "https://mwfreeradio.blogspot.com/2016/10/dutch-mw-pirates-brief-history-and-how.html ; https://archive.org/details/DutchMediumwavePirates2022Feb27",
   "verify": true
  }
 ],
 "legal": "Слушать любительские диапазоны, Си-Би и эфир радиолюбителей в России можно свободно: приёмник вроде XHDATA D-808 регистрировать не нужно. Выходить в эфир без позывного и разрешения (радиохулиганство, «шарманки», пиратское вещание) запрещено. Это административное правонарушение по ст. 13.3 и 13.4 КоАП РФ: штраф, в том числе с конфискацией передатчика. Исключение — Си-Би 27 МГц мощностью до 4 Вт, он регистрации не требует. Конституция (ст. 23) и ст. 63 закона «О связи» № 126-ФЗ гарантируют тайну переговоров, поэтому записывать и распространять содержание услышанных частных и служебных переговоров нельзя. Слушайте для себя и не публикуйте чужие разговоры.",
 "sources": [
  "https://srr.ru/tablitsa-chastotnogo-raspisaniya/",
  "https://srr.ru/sorevnovaniya/radiosvyaz-na-kv/tablitsa-sorevnovanij-po-radiosvyazi-n/",
  "https://www.qrz.ru/roundtables/",
  "https://www.qrz.ru/contest/index?m=10",
  "https://www.qrz.ru/contest/index?m=11",
  "https://www.qrz.ru/contest/index?m=12",
  "https://www.qrz.ru/contest/index?m=1",
  "https://www.qrz.ru/contest/index?m=2",
  "https://www.qrz.ru/contest/index?m=3",
  "https://ra1ohx.ru/publ/spisok_radioljubitelskikh_quot_kruglykh_stolov_quot_rossii_i_ukrainy/2-1-0-498",
  "https://cskr.su/?page_id=18",
  "https://cskr.su/?page_id=24",
  "http://radio-stv.ru/radiosvyaz-kv-i-ukv/radiolyubitelskie-kv-diapazonyi",
  "https://forum.qrz.ru/390-60-metrovyy-diapazon-5351-5-5366-5-kgts/10255-chto-za-diapazon-60-m.html",
  "https://rsgb.services/public/gb2rs/gb2rs_broadcast_schedule.pdf",
  "https://www.darc.de/nachrichten/radio-darc/",
  "https://www.darc.de/nachrichten/deutschland-rundspruch/",
  "http://www.dk0wcy.de/schedule_en.html",
  "https://ra4fjv.org/en/novice/beacon-dk0wcy-10144-khz-solar-activity",
  "https://www.iaru.org/on-the-air/beacons/",
  "https://en.wikipedia.org/wiki/International_Beacon_Project",
  "https://netfinder.radio/nets/view/maritime-mobile-service-net",
  "https://cqww.com/rules/",
  "https://cq160.com/rules/",
  "https://cqwpx.com/rules/",
  "https://www.rdxc.org/rules_eng",
  "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8-%D0%91%D0%B8",
  "https://blog.promarket.info/blog/blog/table-grid-of-frequencies-for-radio-stations-of-cb-civilian-range-27-mhz/",
  "https://www.hfunderground.com/wiki/index.php/CB_Radio",
  "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D1%85%D1%83%D0%BB%D0%B8%D0%B3%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE",
  "https://www.hfunderground.com/wiki/index.php/Radio_Hooligans",
  "https://www.cqdx.ru/ham/ham-radio-news/radio-pirate-faq-ru/",
  "https://6p3s.ru/freq.php",
  "https://www.svoboda.org/a/27271018.html",
  "https://rutube.ru/video/8081981e3e425e6cf180fa2be34416b8/",
  "http://www.eibispace.de/dx/sked-a26.csv",
  "https://www.hfunderground.com/board/index.php?board=12.0",
  "https://www.hfunderground.com/board/index.php/topic,169404.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169412.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169379.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169390.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169447.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169460.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169514.0.html",
  "https://www.hfunderground.com/board/index.php/topic,169364.0.html",
  "https://www.hfunderground.com/board/index.php?topic=162553.0",
  "https://swling.blog/2024/08/09/music-wave-radio-na-piratskoj-chastote-3940-khz/",
  "https://petersdxcorner.nl/belarus/qsl-music-wave-radio-3940-khz/",
  "https://mwfreeradio.blogspot.com/2016/10/dutch-mw-pirates-brief-history-and-how.html",
  "https://archive.org/details/DutchMediumwavePirates2022Feb27",
  "https://www.consultant.ru/document/cons_doc_LAW_34661/acaefaec257669702f20b2a36e96381e17d50f52/",
  "https://base.garant.ru/12125267/acc462f0c2d2aed6a5d717eb96fedf9b/",
  "https://www.consultant.ru/document/cons_doc_LAW_43224/2add28425adfc0411d61abad9deab4873e7ad274/",
  "https://www.space.com/stargazing/auroras/will-2026-still-bring-strong-auroras-what-the-suns-recent-activity-tells-us"
 ]
};
