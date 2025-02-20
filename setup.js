const sequelize = require('./config/db');
const User = require('./models/User');
const Student = require('./models/Student');
const Report = require('./models/Report');

async function setupDatabase() {
    try {
        await sequelize.sync({ force: true }); // Resets database every time it's run
        console.log('Database synced.');

        // Insert sample users
        await User.create({ email: 'admin@clg.com', password: 'admin123', role: 'admin' });
        await User.create({ email: 'faculty@clg.com', password: 'faculty123', role: 'faculty' });

        // Insert sample students
        await Student.bulkCreate([
            { name: 'John Doe', rollNumber: '2023001', department: 'CSE' },
            { name: 'Jane Smith', rollNumber: '2023002', department: 'ECE' }
        ]);

        // Insert sample reports
        await Report.bulkCreate([
            { name: 'Attendance', value: 85 },
            { name: 'Exam Performance', value: 78 }
        ]);

        console.log('Sample data inserted.');
    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        sequelize.close();
    }
}

setupDatabase();
