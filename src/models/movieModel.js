import prisma from '../utils/prismaClient.js';

export const create = async (data) => {
    return await prisma.movie.create({ data });
};

export const findAll = async (filters = {}) => {
    const { title, description, duration, genre, rating, available, minRating, maxDuration } =
        filters;
    const where = {};

    if (minRating !== undefined) {
        where.rating = {
            gte: parseFloat(minRating),
        };
    }

    if (maxDuration !== undefined) {
        where.duration = {
            lte: parseInt(maxDuration),
        };
    }
    if (title) where.title = { contains: title, mode: 'insensitive' };
    if (description) where.description = { contains: description, mode: 'insensitive' };
    if (genre) where.genre = { contains: genre, mode: 'insensitive' };
    if (duration !== undefined) where.duration = parseInt(duration);
    if (rating !== undefined) where.rating = parseFloat(rating);
    if (available !== undefined) {
        where.available = available === 'true';
    };

    return await prisma.movie.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });
};

export const findById = async (id) => {
    return await prisma.movie.findUnique({
        where: { id: parseInt(id) },
    });
};

export const update = async (id, data) => {
    return await prisma.movie.update({
        where: { id: parseInt(id) },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.movie.delete({
        where: { id: parseInt(id) },
    });
};
