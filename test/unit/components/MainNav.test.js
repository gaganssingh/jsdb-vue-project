import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe(`MainNav`, () => {
  it(`displays the company name`, () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Career Maker");
  });

  it(`displays navigation menu items`, () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const menus = navigationMenuItems.map((item) => item.text());
    expect(menus).toEqual([
      "Teams",
      "Locations",
      "Life at CM",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
