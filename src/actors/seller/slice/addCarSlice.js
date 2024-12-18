import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    main: {
        title: "2019 Honda Civic Sport",
        price: "15000",
        gearbox: "Automatic",
        fuelType: "Gasoline",
        status: "Used",
        description: "",
        images: [
            // "/images/car1.jpg", // Replace with default image URLs or empty strings
            // "/images/car2.jpg",
            // "/images/car3.jpg",
        ],    
    },
    interest: {
        installmentLength: [1, 8],
        monthlyInstallmentAmount: [1, 100],
        interestRate: [1, 100],
    },
    detail: {   
        kilometersCount: 10000,
        previousOwners: 2,
        licensePlate: "30E-32432",
        registrationStatus: "Remaining",
        madeIn: "Japan",
        brand: "Toyota",
        carLine: "Camry",
        factoryYear: "2022",
        engineCapacity: "2.0",
        seatNumber: 5,
        numberOfDoors: 4,
        weight: "1.5 tons",    
    }
}

export const addCarSlice = createSlice({
    name: 'addcar',
    initialState,
    reducers: {
        // Change title in the main section
        changeMainTitle: (state, action) => {
            state.main.title = action.payload;
        },
        changeMainDescription: (state, action) => {
            state.main.description = action.payload;
        },

        // Change price in the main section
        changeMainPrice: (state, action) => {
            state.main.price = action.payload;
        },

        // Change gearbox in the main section
        changeMainGearbox: (state, action) => {
            state.main.gearbox = action.payload;
        },

        // Change fuelType in the main section
        changeMainFuelType: (state, action) => {
            state.main.fuelType = action.payload;
        },

        // Change status in the kilometersCountmain section
        changeMainStatus: (state, action) => {
            console.log(action.payload)

            state.main.status = action.payload;
        },

        // // Change images in the main section
        changeMainImages: (state, action) => {
            const { file, index } = action.payload;
            console.log(file)
            console.log(index)
            state.main.images[index] = file; // Store the file object in the state at the given index
        },

        // Change installmentLength in interest section
        changeInterestInstallmentLength: (state, action) => {
            state.interest.installmentLength = action.payload;
        },

        // Change monthlyInstallmentAmount in interest section
        changeInterestMonthlyInstallmentAmountMin: (state, action) => {
            state.interest.monthlyInstallmentAmount[0] = action.payload;
        },
        // Change monthlyInstallmentAmount in interest section
        changeInterestMonthlyInstallmentAmountMax: (state, action) => {
            state.interest.monthlyInstallmentAmount[1] = action.payload;
        },
        // Change interestRate in interest section
        changeInterestRateMin: (state, action) => {
            state.interest.interestRate[0] = action.payload
        },
        changeInterestRateMax: (state, action) => {
            state.interest.interestRate[1] = action.payload
        },
        // Change kilometersCount in detail section
        changeDetailKilometersCount: (state, action) => {
            console.log(action.payload)
            state.detail.kilometersCount = action.payload.kilometersCount;
        },

        // Change previousOwners in detail section
        changeDetailPreviousOwners: (state, action) => {
            state.detail.previousOwners = action.payload.previousOwners;
        },

        // Change licensePlate in detail section
        changeDetailLicensePlate: (state, action) => {
            state.detail.licensePlate = action.payload.licensePlate;
        },

        // Change registrationStatus in detail section
        changeDetailRegistrationStatus: (state, action) => {
            state.detail.registrationStatus = action.payload.registrationStatus;
        },

        // Change madeIn in detail section
        changeDetailMadeIn: (state, action) => {
            state.detail.madeIn = action.payload.madeIn;
        },

        // Change brand in detail section
        changeDetailBrand: (state, action) => {
            state.detail.brand = action.payload;
        },

        // Change carLine in detail section
        changeDetailCarLine: (state, action) => {
            state.detail.carLine = action.payload;
        },

        // Change factoryYear in detail section
        changeDetailFactoryYear: (state, action) => {
            state.detail.factoryYear = action.payload.factoryYear;
        },

        // Change engineCapacity in detail section
        changeDetailEngineCapacity: (state, action) => {
            state.detail.engineCapacity = action.payload.engineCapacity;
        },

        // Change seatNumber in detail section
        changeDetailSeatNumber: (state, action) => {
            state.detail.seatNumber = action.payload.seatNumber;
        },

        // Change numberOfDoors in detail section
        changeDetailNumberOfDoors: (state, action) => {
            state.detail.numberOfDoors = action.payload.numberOfDoors;
        },

        // Change weight in detail section
        changeDetailWeight: (state, action) => {
            state.detail.weight = action.payload.weight;
        },

        // Resets the state to the initial state
        resetState: (state) => {
            return { ...initialState };
        }
    }
});

export const { changeMainDescription, changeDetailBrand, changeDetailCarLine, changeDetailEngineCapacity, changeDetailFactoryYear, changeDetailKilometersCount, changeDetailLicensePlate, changeDetailMadeIn, changeDetailNumberOfDoors, changeDetailPreviousOwners, changeDetailRegistrationStatus, changeDetailSeatNumber, changeDetailWeight, changeInterestInstallmentLength, changeInterestMonthlyInstallmentAmountMin, changeInterestMonthlyInstallmentAmountMax, changeInterestRateMin, changeInterestRateMax, changeMainFuelType, changeMainGearbox, changeMainImages, changeMainPrice, changeMainStatus, changeMainTitle } = addCarSlice.actions;

export default addCarSlice.reducer