# LISTA DE CIDADES - BRASIL

Esse projeto criado para resolver uma task de listar cidades do estado do rio de janeiro para outro projeto, tem a funcionalidade de pegar todas as cidades de um estado a apartir da api do IBGE, oferece suporte a todos os estados do *BRASIL*

Documentação da APi

```bash
https://servicodados.ibge.gov.br/api/docs/
```

Exemplo de busca pelo estado: 

```bash
https://servicodados.ibge.gov.br/api/v1/localidades/estados/RJ/distritos
```

Primeiramente instale as dependencias usando

```bash
npm install
```

casó queira pegar somente as cidades de um estado, modifique o arquivo **/src/mock/states.ts,** faça o build usando o comando:  ****

```bash
npm run build
```

e dê o start script usando o comando:

 

```bash
npm run start
```

ou simplesmente use o comando **npm run dev** para pular o processo de build e start

exemplo de retorno:

```json
{
    "id": 330010005,
    "nome": "Angra dos Reis",
    "municipio": {
      "id": 3300100,
      "nome": "Angra dos Reis",
      "microrregiao": {
        "id": 33013,
        "nome": "Baía da Ilha Grande",
        "mesorregiao": {
          "id": 3305,
          "nome": "Sul Fluminense",
          "UF": {
            "id": 33,
            "sigla": "RJ",
            "nome": "Rio de Janeiro",
            "regiao": {
              "id": 3,
              "sigla": "SE",
              "nome": "Sudeste"
            }
          }
        }
      },
      "regiao-imediata": {
        "id": 330002,
        "nome": "Angra dos Reis",
        "regiao-intermediaria": {
          "id": 3301,
          "nome": "Rio de Janeiro",
          "UF": {
            "id": 33,
            "sigla": "RJ",
            "nome": "Rio de Janeiro",
            "regiao": {
              "id": 3,
              "sigla": "SE",
              "nome": "Sudeste"
            }
          }
        }
      }
    }
  }
```

exemplo de cidade após formatada e salva

```json
 {
        "id": "01966770-3522-721a-bf2f-cb855cd75059",
        "cityName": "Angra dos Reis",
        "cityState": "RJ"
  }
```


