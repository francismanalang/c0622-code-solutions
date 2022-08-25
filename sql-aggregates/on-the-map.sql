select count(*) as "Number of Cities",
       "countries"."name" as "Country Name"
  from "cities"
  join "countries" using ("countryId")
  group by "Country Name";
