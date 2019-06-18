import { PrincipalType, IPropertyFieldGroupOrPerson } from './../propertyFields/peoplePicker/IPropertyFieldPeoplePicker';
import { ISPPeopleSearchService } from './ISPPeopleSearchService';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
/**
 * Service implementation to search people in SharePoint
 */
export default class SPPeopleSearchService implements ISPPeopleSearchService {
    /**
     * Search people from the SharePoint People database
     */
    searchPeople(ctx: IWebPartContext, query: string, principalType: PrincipalType[], siteUrl?: string): Promise<IPropertyFieldGroupOrPerson[]>;
    /**
     * Generates Initials from a full name
     */
    private getFullNameInitials(fullName);
    /**
     * Gets the user photo url
     */
    private getUserPhotoUrl(userEmail, siteUrl);
    /**
     * Returns fake people results for the Mock mode
     */
    private searchPeopleFromMock(ctx, query);
}
