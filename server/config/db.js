import mongoose from "mongoose";
import dns from "node:dns";

// Some routers' DNS resolvers can't handle the SRV lookups required by
// mongodb+srv:// URIs (querySrv ECONNREFUSED). Use public DNS instead.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        console.error("Check your internet/DNS connection and MONGODB_URI, then restart the server.");
        process.exit(1);
    }
};

export default connectDB;
