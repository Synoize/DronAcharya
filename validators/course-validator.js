const { z } = require('zod');

const courseSchema = z.object({
    url: z
        .string({ required_error: "URL is required" })
        .trim(),
    name: z
        .string({ required_error: "course name is required" })
        .trim()
        .min(1, { message: "course name must be at least of 1 characters." })
        .max(45, { message: "course name must not be more than 45 characters." }),
    title: z
        .string({ required_error: "course title is required" })
        .trim()
        .min(1, { message: "course title must be at least of 1 characters." })
        .max(255, { message: "course title must not be more than 255 characters." }),
    description: z
        .string({ required_error: "course description is required" })
        .trim()
        .min(0, { message: "course description must be at least of 10 characters." })
        .max(2500, { message: "course description must not be more than 2500 characters." }),
    price: z
        .string({ required_error: "course price is required" })
        .trim(),
    language: z
        .string({ required_error: "course language is required" })
        .trim(),
    lecturer: z
        .string({ required_error: "course lecturer is required" })
        .trim(),
    update: z
        .string({ required_error: "course update is required" })
        .trim(),
    duration: z
        .string({ required_error: "course duration is required" })
        .trim(),
    offer: z
        .string({ required_error: "course offer is required" })
        .trim(),
});

module.exports = {courseSchema}; 