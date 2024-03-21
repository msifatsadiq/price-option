import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {
    const studentData = [
        {
            name: "Student 1",
            mathMarks: 85,
            englishMarks: 78,
            scienceMarks: 90
        },
        {
            name: "Student 2",
            mathMarks: 70,
            englishMarks: 82,
            scienceMarks: 85
        },
        {
            name: "Student 3",
            mathMarks: 90,
            englishMarks: 88,
            scienceMarks: 92
        },
        {
            name: "Student 4",
            mathMarks: 65,
            englishMarks: 72,
            scienceMarks: 78
        },
        {
            name: "Student 5",
            mathMarks: 75,
            englishMarks: 80,
            scienceMarks: 85
        },
        {
            name: "Student 6",
            mathMarks: 82,
            englishMarks: 85,
            scienceMarks: 88
        },
        {
            name: "Student 7",
            mathMarks: 78,
            englishMarks: 75,
            scienceMarks: 80
        },
        {
            name: "Student 8",
            mathMarks: 88,
            englishMarks: 90,
            scienceMarks: 92
        },
        {
            name: "Student 9",
            mathMarks: 92,
            englishMarks: 85,
            scienceMarks: 90
        },
        {
            name: "Student 10",
            mathMarks: 80,
            englishMarks: 78,
            scienceMarks: 85
        }
    ];

    return (
        <div>
            <LChart width={1200} height={600} data={studentData} >
                <Line dataKey="mathMarks" stroke="red"></Line>
                <Line dataKey="englishMarks" stroke="green"></Line>
                <Line dataKey="scienceMarks" stroke="black"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;