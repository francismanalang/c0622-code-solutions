select "firstName",
       "lastName",
       sum("amount") as "Total"
  from "customers"
  join "rentals" using ("customerId")
  join "payments" using ("rentalId")
  group by "firstName", "lastName"
  order by "Total" desc;
