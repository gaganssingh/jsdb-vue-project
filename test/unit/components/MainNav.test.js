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

  describe(`when user is logged out`, () => {
    it(`prompts user to sign in`, () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe(`when user is logged in`, () => {
    it(`displays user profile image`, async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      let loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(false);
      expect(profileImage.exists()).toBe(true);
    });
  });
});
