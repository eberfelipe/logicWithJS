const grade = 8.5;

function convertGradeToConcept(grade) {
    const gradeMappings = [
        { min: 9, concept: 'A' },
        { min: 8, concept: 'B' },
        { min: 6, concept: 'C' },
        { min: 4, concept: 'D' },
        { min: 0, concept: 'E' } // Assuming the lowest possible grade is 0
    ];

    const mapping = gradeMappings.find(mapping => grade >= mapping.min);
    return mapping ? mapping.concept : 'Invalid grade'; // In case of an invalid grade
}

console.log(`The grade ${grade} corresponds to the concept ${convertGradeToConcept(grade)}.`);
