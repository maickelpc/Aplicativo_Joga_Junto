update eventos set esporte_id = 1 WHERE id = 23;
SELECT 
*
FROM eventos e
join locais l on l.id = e.local_id
WHERE "dataRealizacao" BETWEEN DATE(NOW()) AND DATE( (NOW() + INTERVAL '+ 3 DAYS') )
GROUP BY l.id, e.id
HAVING (
   6371 *
   acos(cos(radians(-25.476170399999997)) * 
   cos(radians(CAST(l.latitude AS DOUBLE PRECISION))) * 
   cos(radians(CAST(l.longitude AS DOUBLE PRECISION)) - 
   radians(-54.574792099999996)) + 
   sin(radians(-25.476170399999997)) * 
   sin(radians(CAST(l.latitude AS DOUBLE PRECISION) )))
) < 10
LIMIT 20;

UPDATE eventos SET "dataRealizacao" = '2019-06-05' WHERE id = 7;
SELECT password from usuarios where username = 'leozao';

update esportes set "imagem" = 'basketball.png' WHERE nome = 'Basquete';

