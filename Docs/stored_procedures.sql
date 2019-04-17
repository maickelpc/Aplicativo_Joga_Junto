CREATE OR REPLACE FUNCTION public.recalcula_score(p_usuario_id integer) RETURNS character varying
    LANGUAGE plpgsql
    AS $$
DECLARE
	v_score_novo numeric(2,1);
BEGIN
	v_score_novo := (SELECT ROUND(AVG("score")::numeric,1) FROM avaliacoes WHERE "usuarioAvaliado_id" = p_usuario_id);
	IF v_score_novo < 0 THEN
		v_score_novo := 0.0;
	END IF;
	IF v_score_novo > 5 THEN
		v_score_novo := 5.0;
	END IF;
	update usuarios set score=v_score_novo where (id = p_usuario_id);
	RETURN v_score_novo;
END;
$$;

INSERT INTO avaliacoes(
            texto, score, "usuarioAvaliado_id", "usuarioAvaliador_id", 
            created_at)
    VALUES ('TESTE LEOZAO', 1, 3, 1, 
            now());

select recalcula_score(3);

