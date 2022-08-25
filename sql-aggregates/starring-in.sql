select count(*) as "Number of Movies",
       "genres"."name" as "Genre"
  from "genres"
  join "filmGenre" using ("genreId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa'
  and "lastName" = 'Monroe'
  group by "Genre";
