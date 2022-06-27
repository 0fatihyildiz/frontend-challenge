# Frontend-challenge

![Preview](https://i.hizliresim.com/9ewkcqa.png)

## Özellikler

- NFT post; resim, video veya minimum/maximum cinsinden fiyatlandırma filtrelenmesi.
- NFT post; "en yeni", "en eski", "en pahalı", "en ucuz" parametreleriyle sıralanması
- Sıralanan veya filtrelenen NFT postlarının query üzerinden sorgulanması
- NFT post maximum 6 adetlik itemler halinde paginate edilmesi

## Kullanılan teknolojiler

- JSON-server
- Axios
- Vue 2 / Nuxt 2
- Scss
- Vuetify

## Neden?

- Neden json-server'daki pagination ve sort özellikleri ile yapmadım?
``` 
GET /nft?_page=7&_limit=20

GET /nft/?_sort=votes&_order=asc
```

+ Javascript ve beceri yetkinliklerimi daha iyi göstermek adına tüm dataları tek seferde çekip Javascript ile işledim. Mixin ile `paginate`, `sort` ve `filter` işlemlerini sürdürülebilir hale getirdim. 

## Nasıl çalışır?

```
npm install
```

```
npm run dev
```

Veya ayrı ayrı çalıştırmak için:

```
npm run nuxt:dev
```

```
npm run json-server
```