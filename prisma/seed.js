import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.movie.createMany({
        data: [
            {
                title: 'Oppenheimer',
                description:
                    'O processo de criação da bomba atômica liderado por J. Robert Oppenheimer.',
                duration: 180,
                genre: 'Drama',
                rating: 8.4,
                available: true,
            },
            {
                title: 'Duna: Parte Dois',
                description:
                    'Paul Atreides busca vingança contra aqueles que destruíram sua família.',
                duration: 166,
                genre: 'Ficção Científica',
                rating: 8.6,
                available: true,
            },
            {
                title: 'Batman',
                description:
                    'Bruce Wayne enfrenta o Charada enquanto descobre segredos sobre seu passado.',
                duration: 176,
                genre: 'Ação',
                rating: 7.8,
                available: false,
            },
            {
                title: 'O Menu',
                description:
                    'Um jantar de alta gastronomia se transforma em um jogo mortal de sobrevivência.',
                duration: 107,
                genre: 'Suspense',
                rating: 7.2,
                available: true,
            },
            {
                title: 'Soul',
                description:
                    'Uma viagem metafísica para descobrir o que torna a vida digna de ser vivida.',
                duration: 100,
                genre: 'Animação',
                rating: 8.0,
                available: true,
            },
            {
                title: 'Sorria',
                description:
                    'Uma psiquiatra é perseguida por uma entidade que se manifesta como um sorriso macabro.',
                duration: 115,
                genre: 'Terror',
                rating: 6.5,
                available: false,
            },
            {
                title: 'Top Gun: Maverick',
                description:
                    'Pete Mitchell retorna à escola de elite para treinar uma nova geração de pilotos.',
                duration: 130,
                genre: 'Ação',
                rating: 8.3,
                available: true,
            },
            {
                title: 'Past Lives',
                description:
                    'Um drama sensível sobre escolhas, destino e reencontros após muitos anos.',
                duration: 105,
                genre: 'Romance',
                rating: 7.9,
                available: true,
            },
            {
                title: 'Barbie',
                description:
                    'A boneca mais famosa do mundo parte em uma jornada de autodescoberta no mundo real.',
                duration: 114,
                genre: 'Comédia',
                rating: 6.9,
                available: true,
            },
            {
                title: 'Interestelar',
                description:
                    'Exploradores viajam além desta galáxia para descobrir se a humanidade tem um futuro.',
                duration: 169,
                genre: 'Ficção Científica',
                rating: 8.7,
                available: false,
            },
        ],
    });

    console.log('Seed concluído!');
}

main()
    .catch((e) => {
        console.error('Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
