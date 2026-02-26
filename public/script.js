const { useEffect, useState } = React;

function App() {
    const [affirmation, setAffirmation] = useState("");
    const [isFading, setIsFading] = useState(false);

    const fetchAffirmation = async () => {
        try {
            setIsFading(true);
            const response = await fetch("/affirmation");
            const data = await response.json();
            setTimeout(() => {
                setAffirmation(data.affirmation);
                setIsFading(false);
            }, 200);
        } catch (error) {
            console.error("Erro ao buscar frase:", error);
            setIsFading(false);
        }
    };

    useEffect(() => {
        fetchAffirmation();
    }, []);

    return (
        <div className="page">
            <section className="hero">
                <div className="hero-content">
                    <div className="tag">Clareza mental · Saúde emocional · Cultura positiva</div>
                    <h1>Afirmações positivas como ferramenta de foco, bem-estar e performance humana.</h1>
                    <p>
                        Quando uma frase positiva é repetida com intenção, ela ajuda a reorganizar o olhar sobre desafios
                        diários. O cérebro responde melhor a mensagens simples, consistentes e carregadas de propósito.
                        O resultado é um ambiente mais calmo, com menos ruído interno e maior capacidade de decisão.
                    </p>
                    <div className="actions">
                        <button className="btn-primary" onClick={fetchAffirmation}>Gerar nova afirmação</button>
                        <a className="btn-outline" href="#corporativo">Ver aplicação corporativa</a>
                    </div>
                </div>

                <div className="hero-card">
                    <p className={`affirmation ${isFading ? "fade" : ""}`}>
                        {affirmation || "Carregando uma afirmação que inspira confiança..."}
                    </p>
                    <p>
                        Um exercício rápido que pode abrir reuniões, fechar ciclos do dia ou servir como âncora pessoal em
                        momentos de pressão.
                    </p>
                </div>
            </section>

            <section className="section" id="corporativo">
                <h2>O que acontece no cérebro quando a mensagem é positiva</h2>
                <p>
                    Afirmações funcionam como um direcionamento de atenção. Ao repetir uma frase curta, o cérebro reduz a
                    dispersão e reforça caminhos mentais ligados a segurança, autocontrole e confiança.
                </p>
                <div className="grid">
                    <div className="card">
                        <h3>Foco direcionado</h3>
                        <p>
                            A repetição ajuda o cérebro a filtrar distrações e priorizar uma narrativa interna mais clara.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Regulação emocional</h3>
                        <p>
                            Frases positivas diminuem o peso do estresse imediato e criam espaço para respostas mais conscientes.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Memória de recursos</h3>
                        <p>
                            Ao afirmar habilidades e virtudes, a mente acessa com mais facilidade experiências de sucesso.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="split">
                    <div>
                        <h2>Impacto na saúde e no ritmo de vida</h2>
                        <p>
                            A prática cotidiana de afirmações não é mágica, mas cria um cenário interno mais estável. Com mais
                            serenidade, o corpo responde melhor ao descanso, aos relacionamentos e às decisões rotineiras.
                        </p>
                        <div className="grid">
                            <div className="card">
                                <h3>Qualidade do sono</h3>
                                <p>
                                    Mentes menos agitadas tendem a desacelerar com mais facilidade no fim do dia.
                                </p>
                            </div>
                            <div className="card">
                                <h3>Energia diária</h3>
                                <p>
                                    Mensagens positivas reduzem a autocrítica excessiva e liberam energia mental.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="quote">
                        “Eu conduzo meu dia com clareza. O que é importante se destaca, o que é ruído perde força.”
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Benefícios percebidos em ambientes corporativos</h2>
                <p>
                    Em empresas, afirmações funcionam como um ritual simples para abrir encontros, alinhar equipes e reduzir
                    tensões desnecessárias. O foco está em criar consistência emocional e comunicação mais produtiva.
                </p>
                <div className="grid">
                    <div className="card">
                        <h3>Times mais coesos</h3>
                        <p>
                            Uma narrativa positiva compartilhada fortalece senso de pertencimento e confiança.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Clareza de metas</h3>
                        <p>
                            Frases curtas ajudam a lembrar o propósito e reduzir desvios de atenção.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Melhor gestão de pressão</h3>
                        <p>
                            A repetição de valores e capacidades reduz a ansiedade diante de prazos e mudanças.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Como aplicar sem parecer artificial</h2>
                <p>
                    O segredo é consistência e autenticidade. Afirmações funcionam melhor quando refletem a cultura e o
                    momento real da equipe.
                </p>
                <div className="grid">
                    <div className="card">
                        <h3>Curto e direto</h3>
                        <p>
                            Use frases de uma linha, com linguagem simples e verdadeira para o time.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Em rituais-chave</h3>
                        <p>
                            Abertura de reuniões, início do dia ou fechamento de ciclos são bons momentos.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Integração gradual</h3>
                        <p>
                            Comece com poucos minutos e observe a receptividade antes de expandir.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="hero-card">
                    <h2>Conclusão</h2>
                    <p>
                        Afirmações positivas são uma ferramenta de baixo custo e alto impacto humano. Elas organizam o foco,
                        dão direção ao pensamento e fortalecem a qualidade das relações. Com linguagem genuína, tornam-se um
                        elemento discreto, porém poderoso, para culturas mais saudáveis.
                    </p>
                </div>
            </section>

            <footer className="footer">
                Conteúdo voltado para bem-estar e cultura organizacional. Não substitui aconselhamento médico ou psicológico.
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
