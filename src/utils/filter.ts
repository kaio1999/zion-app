import { FilterData, ListPLacesInterface } from "../types/filterData";

export const filterData = ({data, searchText, selectedCategories}: FilterData) : ListPLacesInterface[] => {
   return data.filter((item: any) => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const isInSelectedCategories = selectedCategories.length === 0 || selectedCategories.includes(item.category);

        if (item.pricePerNight.toString().includes(lowerCaseSearchText)) {
            return isInSelectedCategories;
        }
        if (item.address.toLowerCase().includes(lowerCaseSearchText)) {
            return isInSelectedCategories;
        }
        const haveMatch = item.have.some((feature: string) =>
            feature.toLowerCase().includes(lowerCaseSearchText)
        );
        if (haveMatch) {
            return isInSelectedCategories;
        }

        return false;
})}