import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/Pricesection'; // File name check karein (Pricesection / PriceSection)
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from './components/Transactions';
import InfoCard from './components/InfoCard';
const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap="6"
        >
          {/* Top Row: Portfolio Section (Spans Full Width across 2 columns) */}
          <GridItem
            colSpan={{
            base: 1,
              xl: 2,
            }}
          >
            <PortfolioSection />
          </GridItem>

          {/* Left Column: Price Section */}
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>

          {/* Right Column: Transactions Section */}
          <GridItem colSpan={1}>
            {/* Future Transactions Component */}
            <Transactions/>
          </GridItem>
          <GridItem colSpan={{ base: 1, xl: 1 }}>
  <InfoCard
    imgUrl="/images/dot_bg.svg"
    text="Learn more about Loans – Keep your Bitcoin, access it's value without selling it"
    tagText="Loans"
    inverted={false}
  />
</GridItem>

<GridItem colSpan={{ base: 1, xl: 1 }}>
  <InfoCard
    imgUrl="/images/grid_bg.svg"
    text="Learn more about our real estate, mortgage, and corporate account services"
    tagText="Contact"
    inverted={true}
  />
</GridItem>
        </Grid>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;