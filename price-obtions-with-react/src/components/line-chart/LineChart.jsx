import { BarChart, Bar, LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { "student_name": "John", "student_id": 1, "math_mark": 85, "physics_mark": 78, "chemistry_mark": 92 },
        { "student_name": "Emma", "student_id": 2, "math_mark": 78, "physics_mark": 85, "chemistry_mark": 70 },
        { "student_name": "Michael", "student_id": 3, "math_mark": 92, "physics_mark": 88, "chemistry_mark": 75 },
        { "student_name": "Sophia", "student_id": 4, "math_mark": 65, "physics_mark": 72, "chemistry_mark": 68 },
        { "student_name": "James", "student_id": 5, "math_mark": 70, "physics_mark": 75, "chemistry_mark": 82 },
        { "student_name": "Olivia", "student_id": 6, "math_mark": 88, "physics_mark": 90, "chemistry_mark": 85 },
        { "student_name": "William", "student_id": 7, "math_mark": 75, "physics_mark": 68, "chemistry_mark": 78 },
        { "student_name": "Ava", "student_id": 8, "math_mark": 82, "physics_mark": 80, "chemistry_mark": 88 },
        { "student_name": "Alexander", "student_id": 9, "math_mark": 90, "physics_mark": 92, "chemistry_mark": 90 },
        { "student_name": "Mia", "student_id": 10, "math_mark": 73, "physics_mark": 68, "chemistry_mark": 75 }
    ]



    return (
        <div>
            <div className='m-4 p-6 border'>
                <LChart width={500} height={300} data={studentMarks}>
                    <XAxis dataKey="student_name"></XAxis>
                    <YAxis></YAxis>
                    <Line stroke='yellow' dataKey="math_mark"></Line>
                    <Line stroke='lightgreen' dataKey="chemistry_mark"></Line>
                    <Line stroke='lightblue' dataKey="physics_mark"></Line>
                </LChart>
            </div>
            <div className='m-4 p-6 border'>
                <BarChart width={530} height={250} data={studentMarks}>
                    <XAxis dataKey="student_name" />
                    <YAxis></YAxis>
                    <Bar dataKey="physics_mark" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default LineChart;