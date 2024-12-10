import React from "react";

// Importaciones corregidas
import FilterBar from "./FilterBar/FilterBar";
import MemberList from "./MemberList/MemberList";
import MemberItem from "./MemberList/MemberItem/MemberItem";
import BulkActions from "./MemberList/MemberItem/BulkActions/BulkActions";
import MemberDetailsModal from "./MemberList/MemberItem/MemberdetailsModal/MemberdetailsModal";
import MemberEditModal from "./MemberList/MemberItem/MemberEditModal/MemberEditModal";
import Pagination from "./MemberList/Pagination/Pagination";
import NotificationSystem from "../General/NotificationSystem/NotificationSystem"; 
import SortControls from "./SortControls/SortControls";

import "./GuildMemberManagement.css";

const GuildMemberManagement = () => (
    <div className="guild-member-management">
        <NotificationSystem />
        <FilterBar />
        <SortControls />
        <BulkActions />
        <MemberList />
        <MemberItem />
        <Pagination />
        <MemberDetailsModal />
        <MemberEditModal />
    </div>
);

export default GuildMemberManagement;
